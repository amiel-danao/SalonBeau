import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StylistPageRoutingModule } from './stylist-routing.module';

import { StylistPage } from './stylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StylistPageRoutingModule
  ],
  declarations: [StylistPage]
})
export class StylistPageModule {}
