import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarTransferenciaPage } from './agregar-transferencia.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarTransferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarTransferenciaPageRoutingModule {}
