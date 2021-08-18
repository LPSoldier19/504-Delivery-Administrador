import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor(private http:HttpClient) { }

  obtenerRestaurantes():Observable<any>{
    return this.http.get('http://localhost:8888/restaurantes',{});
  }

  obtenerMenuRestaurante(idRestaurante:any):Observable<any>{
    return this.http.get(`http://localhost:8888/restaurantes/${idRestaurante}/menu`,{});
  }
}
