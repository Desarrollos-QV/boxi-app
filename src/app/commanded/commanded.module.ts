import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { CommandedPageRoutingModule } from './commanded-routing.module';

import { CommandedPage } from './commanded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandedPageRoutingModule,
    TranslateModule
  ],
  declarations: [CommandedPage]
})
export class CommandedPageModule {}
