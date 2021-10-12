import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoneCommPage } from './done-comm.page';

const routes: Routes = [
  {
    path: '',
    component: DoneCommPage
  },
  {
    path: 'rate-trip',
    loadChildren: () => import('./rate-trip/rate-trip.module').then( m => m.RateTripPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoneCommPageRoutingModule {}
