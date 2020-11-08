import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoCorreoPage } from './ingreso-correo.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoCorreoPageRoutingModule {}
