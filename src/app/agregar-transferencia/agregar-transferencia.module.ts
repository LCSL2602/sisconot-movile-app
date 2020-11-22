import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarTransferenciaPageRoutingModule } from './agregar-transferencia-routing.module';

import { AgregarTransferenciaPage } from './agregar-transferencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarTransferenciaPageRoutingModule
  ],
  declarations: [AgregarTransferenciaPage]
})
export class AgregarTransferenciaPageModule {}
