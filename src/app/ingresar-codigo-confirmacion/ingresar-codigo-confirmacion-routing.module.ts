import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarCodigoConfirmacionPage } from './ingresar-codigo-confirmacion.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarCodigoConfirmacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarCodigoConfirmacionPageRoutingModule {}
