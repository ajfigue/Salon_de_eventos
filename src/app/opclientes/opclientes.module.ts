import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpclientesPageRoutingModule } from './opclientes-routing.module';

import { OpclientesPage } from './opclientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OpclientesPageRoutingModule
  ],
  declarations: [OpclientesPage]
})
export class OpclientesPageModule {}
