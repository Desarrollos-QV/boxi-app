import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndsignupPageRoutingModule } from './endsignup-routing.module';

import { EndsignupPage } from './endsignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndsignupPageRoutingModule
  ],
  declarations: [EndsignupPage]
})
export class EndsignupPageModule {}
