import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutClassPage } from './out-class.page';

const routes: Routes = [
  {
    path: '',
    component: OutClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutClassPageRoutingModule {}
