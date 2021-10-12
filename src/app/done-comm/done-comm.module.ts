import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoneCommPageRoutingModule } from './done-comm-routing.module';

import { DoneCommPage } from './done-comm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoneCommPageRoutingModule
  ],
  declarations: [DoneCommPage]
})
export class DoneCommPageModule {}
