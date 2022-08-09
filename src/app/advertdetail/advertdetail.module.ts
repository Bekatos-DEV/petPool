import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertdetailPageRoutingModule } from './advertdetail-routing.module';

import { AdvertdetailPage } from './advertdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertdetailPageRoutingModule
  ],
  declarations: [AdvertdetailPage]
})
export class AdvertdetailPageModule {}
