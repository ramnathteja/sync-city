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
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { ParkingService } from '../services/parking';
import { Schedule2Page } from '../pages/schedule2/schedule2';
import { Schedule3Page } from '../pages/schedule3/schedule3';

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
    SchedulePage,
    Schedule2Page,
    Schedule3Page
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
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
    SchedulePage,
    Schedule2Page,
    Schedule3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ScheduleService,
    Geolocation,
    HTTP,
    ParkingService
  ]
})
export class AppModule {}
