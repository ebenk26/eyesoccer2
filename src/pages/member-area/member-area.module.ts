import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberAreaPage } from './member-area';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular';

@NgModule({
  declarations: [
    MemberAreaPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberAreaPage),
  ],
})
export class MemberAreaPageModule {
	constructor(){}
}
