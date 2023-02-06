import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAppointmentPageRoutingModule } from './user-appointment-routing.module';

import { UserAppointmentPage } from './user-appointment.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ionic4DatepickerModule,
    UserAppointmentPageRoutingModule
  ],
  declarations: [UserAppointmentPage]
})
export class UserAppointmentPageModule {}
