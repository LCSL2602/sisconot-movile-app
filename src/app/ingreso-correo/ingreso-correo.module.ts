import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoCorreoPageRoutingModule } from './ingreso-correo-routing.module';

import { IngresoCorreoPage } from './ingreso-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoCorreoPageRoutingModule
  ],
  declarations: [IngresoCorreoPage]
})
export class IngresoCorreoPageModule {}
