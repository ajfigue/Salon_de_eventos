import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpsalonPageRoutingModule } from './opsalon-routing.module';

import { OpsalonPage } from './opsalon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OpsalonPageRoutingModule
  ],
  declarations: [OpsalonPage]
})
export class OpsalonPageModule {}

