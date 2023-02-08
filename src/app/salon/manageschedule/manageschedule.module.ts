import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageschedulePageRoutingModule } from './manageschedule-routing.module';

import { ManageSchedulePage } from './manage-schedule-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageschedulePageRoutingModule
  ],
  declarations: [ManageSchedulePage]
})
export class ManageschedulePageModule {}
