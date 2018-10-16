import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { lists } from '../../data/lists.interface';
import locationList from '../../data/locationLists';
import { TransportationPage } from '../transportation/transportation';

@IonicPage()
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html'
})
export class LocationsPage implements OnInit {
  listOfLocations: { locations: lists[] }[];
  transportation = TransportationPage;

  ngOnInit() {
    this.listOfLocations = locationList;
    console.log(this.listOfLocations);
  }
}
