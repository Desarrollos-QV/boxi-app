import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetLenguagePage } from './set-lenguage.page';

const routes: Routes = [
  {
    path: '',
    component: SetLenguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetLenguagePageRoutingModule {}
