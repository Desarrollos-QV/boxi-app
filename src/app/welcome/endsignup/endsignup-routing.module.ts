import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndsignupPage } from './endsignup.page';

const routes: Routes = [
  {
    path: '',
    component: EndsignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndsignupPageRoutingModule {}
