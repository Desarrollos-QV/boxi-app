import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { SetLenguagePageRoutingModule } from './set-lenguage-routing.module';

import { SetLenguagePage } from './set-lenguage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SetLenguagePageRoutingModule
  ],
  declarations: [SetLenguagePage]
})
export class SetLenguagePageModule {}
