import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
import { localBus } from '../../models/localBus.interface';
import { bus } from '../../models/bus.interface';
import { metro } from '../../models/metro.interface';
import { ScheduleService } from '../../services/schedule';
import { SchedulePage } from '../schedule/schedule';
import { Geolocation } from '@ionic-native/geolocation';
import { ParkingService } from '../../services/parking';
import { parkingDataModel } from '../../models/parkingData.interface';
import { Schedule2Page } from '../schedule2/schedule2';
import { Schedule3Page } from '../schedule3/schedule3';

declare var google;

@IonicPage()
@Component({
  selector: 'page-parking',
  templateUrl: 'parking.html'
})
export class ParkingPage implements OnInit {
  @ViewChild('map')
  mapElement: ElementRef;
  map: any;
  localBuses: localBus[];
  cityBuses: bus[];
  metros: metro[];
  parkingData: parkingDataModel;
  currentSelectedLot: string;
  clicked: boolean = true;
  parkingSpots = [
    {
      url: 'yt_lot_1'
    },
    {
      url: 'yt_lot_2'
    }
  ];
  pastMarker: any = null;

  constructor(
    public navParams: NavParams,
    private scheduleService: ScheduleService,
    private modalCtrl: ModalController,
    private geolocation: Geolocation,
    private parkingService: ParkingService
  ) {}

  ngOnInit() {
    let mapOptions = {
      zoom: 15,
      fullscreenControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.geolocation.getCurrentPosition().then(pos => {
      let latlang = new google.maps.LatLng(
        pos.coords.latitude,
        pos.coords.longitude
      );
      this.map.setCenter(latlang);
      this.map.setZoom(15);
    });
  }

  ionViewDidLoad() {
    this.parkingSpots.forEach(element => {
      console.log(element.url);
      this.parkingService
        .getParkingLotData(element.url)
        .subscribe((data: parkingDataModel) => {
          console.log(data);
          this.addMarker(data);
        });
    });
  }

  refreshParkingLotData() {
    this.clicked = false;
    this.parkingService
      .getParkingLotData(this.currentSelectedLot)
      .subscribe((data: parkingDataModel) => {
        this.parkingData = data;
      });
    console.log('refresh came!!');
  }

  addMarker(markInfo: parkingDataModel) {
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(
        markInfo.location.value.coordinates[1],
        markInfo.location.value.coordinates[0]
      ),
      // animation: google.maps.Animation.BOUNCE,
      data: markInfo,
      map: this.map
    });
    google.maps.event.addListener(marker, 'click', () => {
      if (this.pastMarker == null) {
        this.pastMarker = marker;
      } else {
        this.pastMarker.setAnimation(null);
        this.pastMarker = marker;
      }
      marker.setAnimation(google.maps.Animation.BOUNCE);
      infowindow.setContent(marker.data.name.value);
      infowindow.open(this.map, marker);
      if (this.clicked) {
        this.polling();
      }
      this.currentSelectedLot = marker.data.id;
      this.refreshParkingLotData();
    });
  }

  polling() {
    setInterval(() => {
      this.refreshParkingLotData();
    }, 15 * 1000);
  }

  ionViewWillEnter() {
    this.refreshParkingPage();
  }

  onClickSchedule(commute: metro | localBus | bus) {
    if (commute.type == 'metro') {
      const modal = this.modalCtrl.create(SchedulePage, commute);
      modal.present();
      modal.onDidDismiss(() => {
        this.refreshParkingPage();
      });
    } else if (commute.type == 'intra_bus') {
      const modal = this.modalCtrl.create(Schedule2Page, commute);
      modal.present();
      modal.onDidDismiss(() => {
        this.refreshParkingPage();
      });
    } else {
      const modal = this.modalCtrl.create(Schedule3Page, commute);
      modal.present();
      modal.onDidDismiss(() => {
        this.refreshParkingPage();
      });
    }
  }
  onRemoveFromFavourites(commute: metro | localBus | bus) {
    this.scheduleService.removeCommuteFromFavourite(commute);
    this.refreshParkingPage();
  }

  refreshParkingPage() {
    const favourite = this.scheduleService.getFavouriteCommute();
    this.localBuses = favourite.localbus;
    this.cityBuses = favourite.bus;
    this.metros = favourite.merto;
  }

  isMarkerClicked() {
    return this.clicked;
  }
}
