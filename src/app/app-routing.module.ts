import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingreso-usuario',
    loadChildren: () => import('./ingreso-usuario/ingreso-usuario.module').then( m => m.IngresoUsuarioPageModule)
  },
  {
    path: 'cambio-clave',
    loadChildren: () => import('./cambio-clave/cambio-clave.module').then( m => m.CambioClavePageModule)
  },
  {
    path: 'ingreso-clave',
    loadChildren: () => import('./ingreso-clave/ingreso-clave.module').then( m => m.IngresoClavePageModule)
  },
  {
    path: 'ingreso-correo',
    loadChildren: () => import('./ingreso-correo/ingreso-correo.module').then( m => m.IngresoCorreoPageModule)
  },
  {
    path: 'ingresar-codigo-confirmacion',
    loadChildren: () => import('./ingresar-codigo-confirmacion/ingresar-codigo-confirmacion.module').then( m => m.IngresarCodigoConfirmacionPageModule)
  },
  {
    path: 'inicio-alumno',
    loadChildren: () => import('./inicio-alumno/inicio-alumno.module').then( m => m.InicioAlumnoPageModule)
  },
  {
    path: 'seleccionar-cuenta',
    loadChildren: () => import('./seleccionar-cuenta/seleccionar-cuenta.module').then( m => m.SeleccionarCuentaPageModule)
  },
  {
    path: 'registrar-pago',
    loadChildren: () => import('./registrar-pago/registrar-pago.module').then( m => m.RegistrarPagoPageModule)
  },
  {
    path: 'agregar-transferencia',
    loadChildren: () => import('./agregar-transferencia/agregar-transferencia.module').then( m => m.AgregarTransferenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
