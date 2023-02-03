import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StylistPage } from './stylist.page';

const routes: Routes = [
  {
    path: '',
    component: StylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StylistPageRoutingModule {}
