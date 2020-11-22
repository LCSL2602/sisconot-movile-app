import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarCuentaPageRoutingModule } from './seleccionar-cuenta-routing.module';

import { SeleccionarCuentaPage } from './seleccionar-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarCuentaPageRoutingModule
  ],
  declarations: [SeleccionarCuentaPage]
})
export class SeleccionarCuentaPageModule {}
