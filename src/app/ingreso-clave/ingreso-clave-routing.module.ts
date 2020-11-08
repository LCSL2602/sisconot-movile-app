import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoClavePage } from './ingreso-clave.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoClavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoClavePageRoutingModule {}
