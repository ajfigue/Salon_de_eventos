import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpsalonPage } from './opsalon.page';

const routes: Routes = [
  {
    path: '',
    component: OpsalonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpsalonPageRoutingModule {}
