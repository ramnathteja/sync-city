import { Component, OnInit } from '@angular/core';
import {
  IonicPage,
  NavParams,
  AlertController,
  ModalController
} from 'ionic-angular';
import { transport } from '../../data/transport.interface';
import { stations } from '../../data/stations.interface';
import { SchedulePage } from '../schedule/schedule';
import { ScheduleService } from '../../services/schedule';

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
    private scheduleService: ScheduleService
  ) {}

  ngOnInit() {
    this.transport = this.navParams.data;
  }

  checkDetailSchedule(station: stations) {
    const commute = this.scheduleService.getCommuteSchedule(station);
    const modal = this.modalCtrl.create(SchedulePage, commute);
    modal.present();
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
            const commute = this.scheduleService.getCommuteSchedule(station);
            this.scheduleService.addCommuteToFavourite(commute);
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
