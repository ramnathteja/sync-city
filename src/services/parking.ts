import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ParkingService {
  private parking: any;
  constructor(private httpClient: HttpClient) {}

  getParkingLotData(addon:string) {
    console.log('this is the addon',addon);
     return this.httpClient
      .get('http://localhost:8100/goto/'+addon);
  }
}
