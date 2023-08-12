import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescPeliPageRoutingModule } from './desc-peli-routing.module';

import { DescPeliPage } from './desc-peli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescPeliPageRoutingModule
  ],
  declarations: [DescPeliPage]
})
export class DescPeliPageModule {}
