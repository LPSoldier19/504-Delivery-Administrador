import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AgregarRestauranteComponent } from './components/agregar-restaurante/agregar-restaurante.component';
import { ListaMotoristasComponent } from './components/lista-motoristas/lista-motoristas.component';
import { ListaRestaurantesComponent } from './components/lista-restaurantes/lista-restaurantes.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PedidosCanceladosComponent } from './components/pedidos-cancelados/pedidos-cancelados.component';
import { PedidosEntregadosComponent } from './components/pedidos-entregados/pedidos-entregados.component';
import { SolicitudesMotoristasComponent } from './components/solicitudes-motoristas/solicitudes-motoristas.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'home', component:MainComponent, canActivate:[AuthGuard]},
  { path:'motoristas', component:ListaMotoristasComponent, canActivate:[AuthGuard]},
  { path: 'solicitudes-motoristas', component:SolicitudesMotoristasComponent, canActivate:[AuthGuard]},
  { path: 'restaurantes', component: ListaRestaurantesComponent, canActivate:[AuthGuard]},
  { path: 'nuevo-restaurante', component: AgregarRestauranteComponent, canActivate:[AuthGuard]},
  { path: 'pedidos/entregados', component: PedidosEntregadosComponent, canActivate:[AuthGuard]},
  { path: 'pedidos/cancelados', component: PedidosCanceladosComponent, canActivate:[AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
