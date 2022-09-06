import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutClassPageRoutingModule } from './out-class-routing.module';

import { OutClassPage } from './out-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutClassPageRoutingModule
  ],
  declarations: [OutClassPage]
})
export class OutClassPageModule {}
