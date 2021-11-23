
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { LoginComponent } from './login/login.component';
import { FormPlazoComponent } from './plazo/formulario/FormPlazoComponent';
import { PlazoComponent } from './plazo/plazo.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [{ path: 'login',component:LoginComponent  },
{ path: 'cotizaciones', component:CotizacionesComponent  },
{ path: 'plazo', component:PlazoComponent  },
{ path: 'producto', component: ProductosComponent  },
{ path: 'plazo/form', component: FormPlazoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
