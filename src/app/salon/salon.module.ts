import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalonPageRoutingModule } from './salon-routing.module';

import { SalonPage } from './salon.page';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SalonPageRoutingModule,
    HttpClientModule
  ],
  declarations: [SalonPage]
})
export class SalonPageModule {}

