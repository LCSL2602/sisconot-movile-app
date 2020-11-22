import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {

  datosDePrueba:any = [
    {
      nroControl: '#1234',
      concepto: 'Septiembre',
      monto: '1695000',
      fecha: '21/11/2020',
      Estado: 'Facturado'
    },
    {
      nroControl: '#1234',
      concepto: 'Septiembre',
      monto: '1695000',
      fecha: '21/11/2020',
      Estado: 'Facturado'
    },
    {
      nroControl: '#1234',
      concepto: 'Septiembre',
      monto: '1695000',
      fecha: '21/11/2020',
      Estado: 'Facturado'
    },
    {
      nroControl: '#1234',
      concepto: 'Septiembre',
      monto: '1695000',
      fecha: '21/11/2020',
      Estado: 'Facturado'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
