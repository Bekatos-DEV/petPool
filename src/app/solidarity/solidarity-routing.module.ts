import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolidarityPage } from './solidarity.page';

const routes: Routes = [
  {
    path: '',
    component: SolidarityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolidarityPageRoutingModule {}
