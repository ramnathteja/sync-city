import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { lists } from '../../models/lists.interface';
import { TransportPage } from '../transport/transport';

/**
 * Generated class for the TransportationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transportation',
  templateUrl: 'transportation.html'
})
export class TransportationPage implements OnInit{
  transport = TransportPage;
  selectedLocation: { location: lists };
  constructor(private navParams: NavParams) {}

  ngOnInit() {
    this.selectedLocation = this.navParams.data;
    console.log(this.selectedLocation);
  }
}
