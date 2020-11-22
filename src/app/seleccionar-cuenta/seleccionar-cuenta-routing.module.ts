import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarCuentaPage } from './seleccionar-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarCuentaPageRoutingModule {}
