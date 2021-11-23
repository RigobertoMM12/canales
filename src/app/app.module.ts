import { NgModule } from '@angular/core';
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

import { PlazoService } from './plazo/plazo.service';
import { ProductoService } from './productos/producto.service';
import { UserService } from './header/UserService';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MyHeaderService } from './header/header.service';

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
    FormPlazoComponent
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
  providers: [PlazoService,ProductoService,UserService,MyHeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
