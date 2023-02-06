import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageschedulePageRoutingModule } from './manageschedule-routing.module';

import { ManageschedulePage } from './manageschedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageschedulePageRoutingModule
  ],
  declarations: [ManageschedulePage]
})
export class ManageschedulePageModule {}
