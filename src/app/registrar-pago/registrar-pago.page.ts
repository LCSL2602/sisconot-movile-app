import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-pago',
  templateUrl: './registrar-pago.page.html',
  styleUrls: ['./registrar-pago.page.scss'],
})
export class RegistrarPagoPage implements OnInit {

  bandera:boolean = false;

  datosDePrueba:any = [
    {
      cedula: 'V-27219726',
      nombre: ' Luis Sulbaran ',
      grado: '6to periodo',
      concepto: ' Octubre',
      monto:'3200000'
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
