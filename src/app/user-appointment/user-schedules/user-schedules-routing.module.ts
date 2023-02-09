import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSchedulePage } from './user-schedules';

const routes: Routes = [
  {
    path: '',
    component: UserSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSchedulesPageRoutingModule {}
