import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewattedancePage } from './viewattedance.page';

const routes: Routes = [
  {
    path: '',
    component: ViewattedancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewattedancePageRoutingModule {}
