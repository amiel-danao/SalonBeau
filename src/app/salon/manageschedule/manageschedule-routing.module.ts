import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageschedulePage } from './manageschedule.page';

const routes: Routes = [
  {
    path: '',
    component: ManageschedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageschedulePageRoutingModule {}
