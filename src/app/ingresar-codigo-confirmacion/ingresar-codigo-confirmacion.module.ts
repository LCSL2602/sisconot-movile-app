import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarCodigoConfirmacionPageRoutingModule } from './ingresar-codigo-confirmacion-routing.module';

import { IngresarCodigoConfirmacionPage } from './ingresar-codigo-confirmacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarCodigoConfirmacionPageRoutingModule
  ],
  declarations: [IngresarCodigoConfirmacionPage]
})
export class IngresarCodigoConfirmacionPageModule {}
