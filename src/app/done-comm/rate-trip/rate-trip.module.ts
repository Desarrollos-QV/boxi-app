import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { RateTripPageRoutingModule } from './rate-trip-routing.module';

import { RateTripPage } from './rate-trip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RateTripPageRoutingModule,
    TranslateModule
  ],
  declarations: [RateTripPage]
})
export class RateTripPageModule {}
