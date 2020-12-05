import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarAlumnnoPageRoutingModule } from './confirmar-alumnno-routing.module';

import { ConfirmarAlumnnoPage } from './confirmar-alumnno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarAlumnnoPageRoutingModule
  ],
  declarations: [ConfirmarAlumnnoPage]
})
export class ConfirmarAlumnnoPageModule {}
