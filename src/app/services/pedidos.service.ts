import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http:HttpClient) { }

  obtenerUltimosPedidos():Observable<any>{
    return this.http.get('http://localhost:8888/pedidos/', {});
  }

  verPedidosEntregados():Observable<any>{
    return this.http.get('http://localhost:8888/pedidos/estado/entregados',{});
  }

  verPedidosCancelados():Observable<any>{
    return this.http.get('http://localhost:8888/pedidos/estado/cancelados',{});
  }
}
