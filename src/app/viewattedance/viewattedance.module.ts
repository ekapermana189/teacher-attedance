import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewattedancePageRoutingModule } from './viewattedance-routing.module';

import { ViewattedancePage } from './viewattedance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewattedancePageRoutingModule
  ],
  declarations: [ViewattedancePage]
})
export class ViewattedancePageModule {}
