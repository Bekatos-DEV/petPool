import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { SolidarityPageRoutingModule } from './solidarity-routing.module';

import { SolidarityPage } from './solidarity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolidarityPageRoutingModule,
    SwiperModule,
  ],
  declarations: [SolidarityPage],
})
export class SolidarityPageModule {}
