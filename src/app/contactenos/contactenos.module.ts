import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactenosPageRoutingModule } from './contactenos-routing.module';

import { ContactenosPage } from './contactenos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContactenosPageRoutingModule
  ],
  declarations: [ContactenosPage]
})
export class ContactenosPageModule {}
