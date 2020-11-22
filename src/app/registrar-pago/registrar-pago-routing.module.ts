import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarPagoPage } from './registrar-pago.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarPagoPageRoutingModule {}
