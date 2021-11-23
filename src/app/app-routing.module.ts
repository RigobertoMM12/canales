
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CcotizacionesComponent } from './ccotizaciones/ccotizaciones.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { LoginComponent } from './login/login.component';
import { FormPlazoComponent } from './plazo/formulario/FormPlazoComponent';
import { PlazoComponent } from './plazo/plazo.component';
import { FormModificaComponent } from './productos/modificar/FormModifica.Component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: '', component:  CotizacionesComponent},
{ path: 'login',component:LoginComponent  },
{ path: 'cotizaciones', component:CcotizacionesComponent  },
{ path: 'plazo', component:PlazoComponent  },
{ path: 'productos', component: ProductosComponent  },
{ path: 'plazo/form', component: FormPlazoComponent },
{ path: 'productos/form', component: FormModificaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
