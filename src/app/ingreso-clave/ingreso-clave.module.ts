import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoClavePageRoutingModule } from './ingreso-clave-routing.module';

import { IngresoClavePage } from './ingreso-clave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoClavePageRoutingModule
  ],
  declarations: [IngresoClavePage]
})
export class IngresoClavePageModule {}
