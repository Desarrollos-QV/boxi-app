import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChkphonePage } from './chkphone.page';

const routes: Routes = [
  {
    path: '',
    component: ChkphonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChkphonePageRoutingModule {}
