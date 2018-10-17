import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ParkingPage } from '../pages/parking/parking';
import { CommutePage } from '../pages/commute/commute';
import { SpotPage } from '../pages/spot/spot';
import { TransportationPage } from '../pages/transportation/transportation';
import { TransportPage } from '../pages/transport/transport';
import { HomePage } from '../pages/home/home';
import { LocationsPage } from '../pages/locations/locations';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleService } from '../services/schedule';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    MyApp,
    ParkingPage,
    CommutePage,
    SpotPage,
    TransportationPage,
    TransportPage,
    HomePage,
    LocationsPage,
    SchedulePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ParkingPage,
    CommutePage,
    SpotPage,
    TransportationPage,
    TransportPage,
    LocationsPage,
    SchedulePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ScheduleService,
    Geolocation  ]
})
export class AppModule {}
