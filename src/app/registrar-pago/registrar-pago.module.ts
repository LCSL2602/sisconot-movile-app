import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPagoPageRoutingModule } from './registrar-pago-routing.module';

import { RegistrarPagoPage } from './registrar-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPagoPageRoutingModule
  ],
  declarations: [RegistrarPagoPage]
})
export class RegistrarPagoPageModule {}
