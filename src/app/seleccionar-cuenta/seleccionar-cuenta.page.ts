import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccionar-cuenta',
  templateUrl: './seleccionar-cuenta.page.html',
  styleUrls: ['./seleccionar-cuenta.page.scss'],
})
export class SeleccionarCuentaPage implements OnInit {

  datosDePrueba:any = [
    {
      concepto:'Octubre',
      fechaVencimiento:'25/11/2020',
      monto:' 1690000.00 '
    },
    {
      concepto:'Octubre',
      fechaVencimiento:'25/11/2020',
      monto:' 1690000.00 '
    },
    {
      concepto:'Octubre',
      fechaVencimiento:'25/11/2020',
      monto:' 1690000.00 '
    },
    {
      concepto:'Octubre',
      fechaVencimiento:'25/11/2020',
      monto:' 1690000.00 '
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
