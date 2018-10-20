import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class ParkingService {
  private parking: any;
  constructor(private httpClient: HttpClient, private htpp: HTTP) {}

  getParkingLotData(addon:string) {

    this.htpp.get('http://203.253.128.164:1026/v2/entities/'+addon,{},{}).then(data => {
      console.log(data);
      console.log('helllllllllllllllllllllllppppppppppppppppoo');

    }).catch(error =>{
      console.log('thi sis ',error);
    });
    console.log('this is the addon',addon);

     return this.httpClient
      .get('http://localhost:8100/goto/'+addon);
  }
}
