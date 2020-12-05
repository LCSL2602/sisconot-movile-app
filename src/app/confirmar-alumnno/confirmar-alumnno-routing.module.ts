import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarAlumnnoPage } from './confirmar-alumnno.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarAlumnnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarAlumnnoPageRoutingModule {}
