import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportationPage } from './transportation';

@NgModule({
  declarations: [
    TransportationPage,
  ],
  imports: [
    IonicPageModule.forChild(TransportationPage),
  ],
})
export class TransportationPageModule {}
