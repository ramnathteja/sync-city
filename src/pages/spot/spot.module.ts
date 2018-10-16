import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpotPage } from './spot';

@NgModule({
  declarations: [
    SpotPage,
  ],
  imports: [
    IonicPageModule.forChild(SpotPage),
  ],
})
export class SpotPageModule {}
