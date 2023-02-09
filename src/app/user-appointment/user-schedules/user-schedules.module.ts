import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSchedulePage } from './user-schedules';
import {UserSchedulesPageRoutingModule} from './user-schedules-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSchedulesPageRoutingModule,
  ],
  declarations: [UserSchedulePage]
})
export class UserSchedulePageModule {}
