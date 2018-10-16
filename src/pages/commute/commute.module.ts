import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommutePage } from './commute';

@NgModule({
  declarations: [
    CommutePage,
  ],
  imports: [
    IonicPageModule.forChild(CommutePage),
  ],
})
export class CommutePageModule {}
