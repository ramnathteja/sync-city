import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { localBus } from '../../data/localBus.interface';
import { bus } from '../../data/bus.interface';
import { metro } from '../../data/metro.interface';
import { ScheduleService } from '../../services/schedule';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage implements OnInit{

  name: string;
  selectedCommute: bus | localBus | metro;
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

  isFavourite(commute: bus | metro | localBus) {
    return this.scheduleService.isCommuteFavouriteForSchedulePage(commute);
  }

  onAddToFavourite(commute: bus | metro | localBus) {
    this.scheduleService.addCommuteToFavourite(commute);
  }
  onRemoveToFavourite(commute: bus | metro | localBus) {
    this.scheduleService.removeCommuteFromFavourite(commute);
  }
}
