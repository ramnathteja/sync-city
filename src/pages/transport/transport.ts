import { Component, OnInit } from '@angular/core';
import {
  IonicPage,
  NavParams,
  AlertController,
  ModalController,
  LoadingController
} from 'ionic-angular';
import { transport } from '../../models/transport.interface';
import { stations } from '../../models/stations.interface';
import { SchedulePage } from '../schedule/schedule';
import { ScheduleService } from '../../services/schedule';
import { Schedule2Page } from '../schedule2/schedule2';
import { Schedule3Page } from '../schedule3/schedule3';
import { ParkingService } from '../../services/parking';
import { bus } from '../../models/bus.interface';
import { localBus } from '../../models/localBus.interface';
import { metro } from '../../models/metro.interface';

@IonicPage()
@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html'
})
export class TransportPage implements OnInit {
  transport: transport;
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private alertctrl: AlertController,
    private scheduleService: ScheduleService,
    private orion: ParkingService,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.transport = this.navParams.data;
  }

  checkDetailSchedule(station: stations) {
    const loader =this.loadingCtrl.create({
      content:'please wait...',
      duration:2000
    });
    loader.present();
    this.orion
      .getParkingLotData(station.url)
      .subscribe((commute: bus | localBus | metro) => {
        if (commute.type == 'metro') {
          const modal = this.modalCtrl.create(SchedulePage, commute);
          modal.present();
        } else if (commute.type == 'intra_bus') {
          const modal = this.modalCtrl.create(Schedule2Page, commute);
          modal.present();
        } else {
          const modal = this.modalCtrl.create(Schedule3Page, commute);
          modal.present();
        }
      });

  }

  onAddToFavourite(station: stations) {
    const alert = this.alertctrl.create({
      title: 'Add Favourite',
      subTitle: 'Are you sure?',
      message:
        'are you sure you want to add ' + station.station + ' to favourite?',
      buttons: [
        {
          text: 'Yes',
          cssClass: 'color:danger',
          handler: () => {
            this.orion
              .getParkingLotData(station.url)
              .subscribe((commute: bus | localBus | metro) => {
                this.scheduleService.addCommuteToFavourite(commute);
              });
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('cancelled!');
          }
        },
        {
          text: 'View Schedule First!',
          handler: () => {
            this.checkDetailSchedule(station);
          }
        }
      ]
    });
    alert.present();
  }

  isFavourite(station: stations) {
    return this.scheduleService.isCommuteFavourite(station);
  }

  onRemoveToFavourite(station: stations) {
    this.scheduleService.removeCommuteUsingStation(station);
  }
}
