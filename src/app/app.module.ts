import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListaMotoristasComponent } from './components/lista-motoristas/lista-motoristas.component';
import { SolicitudesMotoristasComponent } from './components/solicitudes-motoristas/solicitudes-motoristas.component';
import { ListaRestaurantesComponent } from './components/lista-restaurantes/lista-restaurantes.component';
import { AgregarRestauranteComponent } from './components/agregar-restaurante/agregar-restaurante.component';
import { PedidosEntregadosComponent } from './components/pedidos-entregados/pedidos-entregados.component';
import { PedidosCanceladosComponent } from './components/pedidos-cancelados/pedidos-cancelados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    SidebarComponent,
    ListaMotoristasComponent,
    SolicitudesMotoristasComponent,
    ListaRestaurantesComponent,
    AgregarRestauranteComponent,
    PedidosEntregadosComponent,
    PedidosCanceladosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, {provide:HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
