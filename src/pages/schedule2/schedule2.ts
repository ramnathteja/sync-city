import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { bus } from '../../data/bus.interface';
import { ScheduleService } from '../../services/schedule';
import { StaticInjector } from '@angular/core/src/di/injector';



@IonicPage()
@Component({
  selector: 'page-schedule2',
  templateUrl: 'schedule2.html',
})
export class Schedule2Page implements OnInit{
  name: string;
  selectedCommute: bus ;
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

  isFavourite(commute: bus ) {
    return this.scheduleService.isCommuteFavouriteForSchedulePage(commute);
  }

  onAddToFavourite(commute: bus) {
    this.scheduleService.addCommuteToFavourite(commute);
  }
  onRemoveToFavourite(commute: bus ) {
    this.scheduleService.removeCommuteFromFavourite(commute);
  }
}




