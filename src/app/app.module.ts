import { NgModule } from '@angular/core';

import 'core-js/features/array/includes'

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask'


import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { PlazoComponent } from './plazo/plazo.component';
import { ProductosComponent } from './productos/productos.component';
import { FormPlazoComponent } from './plazo/formulario/FormPlazoComponent';
import { FormModificaComponent } from './productos/modificar/FormModifica.Component';
import { PlazoService } from './plazo/plazo.service';
import { ProductoService } from './productos/producto.service';
import { UserService } from './header/UserService';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MyHeaderService } from './header/header.service';
import { CotizacionesService } from './cotizaciones/cotizaciones.service';
import { CcotizacionesComponent } from './ccotizaciones/ccotizaciones.component';


FormPlazoComponent
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CotizacionesComponent,
    PlazoComponent,
    ProductosComponent,
    FooterComponent,
    HeaderComponent,
    FormPlazoComponent,
    FormModificaComponent,
    CcotizacionesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule,
    NgxPaginationModule,
  ],
  providers: [PlazoService,ProductoService,UserService,MyHeaderService,CotizacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
