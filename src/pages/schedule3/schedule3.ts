import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { localBus } from '../../data/localBus.interface';
import { ScheduleService } from '../../services/schedule';

/**
 * Generated class for the Schedule3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule3',
  templateUrl: 'schedule3.html',
})
export class Schedule3Page implements OnInit{

  name: string;
  selectedCommute:  localBus ;
  constructor(
    private viewCtrl: ViewController,
    public navParams: NavParams,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(){
    this.selectedCommute = this.navParams.data;
  }
  ionViewDidLoad() {

    this.name = this.navParams.get('id');

  }

  onClose() {
    this.viewCtrl.dismiss();
  }

  isFavourite(commute: localBus) {
    return this.scheduleService.isCommuteFavouriteForSchedulePage(commute);
  }

  onAddToFavourite(commute: localBus) {
    this.scheduleService.addCommuteToFavourite(commute);
  }
  onRemoveToFavourite(commute: localBus) {
    this.scheduleService.removeCommuteFromFavourite(commute);
  }
}
