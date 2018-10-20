import { Injectable } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class ParkingService {
  private parking: any;
  constructor(
    private platform: Platform,
    private http: HTTP,
    private alertCtrl: AlertController
  ) {}

  getParkingLotData(addon: string) {
    console.log('came to get the data of getParkingLotData');
    if (this.platform.is('core')) {
      console.log('this is core!!');
      console.log('this is the addon', addon);
      return this.http.get('http://localhost:8100/goto/' + addon, {}, {});
    } else {
      return this.http.get(
        'http://203.253.128.164:1026/v2/entities/' + addon,
        {},
        {}
      );
    }
  }
}
