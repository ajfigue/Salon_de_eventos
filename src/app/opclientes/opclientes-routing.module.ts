import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpclientesPage } from './opclientes.page';

const routes: Routes = [
  {
    path: '',
    component: OpclientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpclientesPageRoutingModule {}
