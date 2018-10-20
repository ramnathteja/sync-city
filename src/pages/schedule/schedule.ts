import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { metro } from '../../models/metro.interface';
import { ScheduleService } from '../../services/schedule';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage implements OnInit{

  name: string;
  selectedCommute:  metro;
  normalOperation: string[]
  constructor(
    private viewCtrl: ViewController,
    public navParams: NavParams,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(){
    this.selectedCommute = this.navParams.data;
    this.normalOperation = this.selectedCommute.operationNorm.value
  }
  ionViewDidLoad() {

    this.name = this.navParams.get('id');

  }

  onClose() {
    this.viewCtrl.dismiss();
  }

  isFavourite(commute: metro ) {
    return this.scheduleService.isCommuteFavouriteForSchedulePage(commute);
  }

  onAddToFavourite(commute: metro ) {
    this.scheduleService.addCommuteToFavourite(commute);
  }
  onRemoveToFavourite(commute: metro ) {
    this.scheduleService.removeCommuteFromFavourite(commute);
  }
}
