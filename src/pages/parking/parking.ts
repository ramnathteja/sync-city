import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
import { localBus } from '../../data/localBus.interface';
import { bus } from '../../data/bus.interface';
import { metro } from '../../data/metro.interface';
import { ScheduleService } from '../../services/schedule';
import { SchedulePage } from '../schedule/schedule';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-parking',
  templateUrl: 'parking.html'
})
export class ParkingPage {
  @ViewChild('map')
  mapElement: ElementRef;
  map: any;
  localBuses: localBus[];
  cityBuses: bus[];
  metros: metro[];

  constructor(
    public navParams: NavParams,
    private scheduleService: ScheduleService,
    private modalCtrl: ModalController,
    private geolocation: Geolocation
  ) {}

  ionViewDidLoad() {
    let mapOptions = {
      zoom: 15,
      fullscreenControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      // mapTypeControl:false,
      // streetViewControl:false,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.geolocation.getCurrentPosition().then(pos => {
      let latlang = new google.maps.LatLng(
        pos.coords.latitude,
        pos.coords.longitude
      );
      this.map.setCenter(latlang);
      var marker = new google.maps.Marker({
        position: latlang,
        title: 'Hello World!',
        map: this.map
      });
      this.map.setZoom(16);
    });
  }

  ionViewWillEnter() {
    this.refreshParking();
  }

  onClickSchedule(commute: metro | localBus | bus) {
    const modal = this.modalCtrl.create(SchedulePage, commute);
    modal.present();
    modal.onDidDismiss(() => {
      this.refreshParking();
    });
  }
  onRemoveFromFavourites(commute: metro | localBus | bus) {
    this.scheduleService.removeCommuteFromFavourite(commute);
    this.refreshParking();
  }

  refreshParking() {
    const favourite = this.scheduleService.getFavouriteCommute();
    this.localBuses = favourite.localbus;
    this.cityBuses = favourite.bus;
    this.metros = favourite.merto;
  }
}
