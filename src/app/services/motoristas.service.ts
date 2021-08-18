import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  constructor(private http:HttpClient) { }

  obtenerSolicitudes():Observable<any>{
    return this.http.get('http://localhost:8888/motoristas/solicitudes',{});
  }

  obtenerMotoristas():Observable<any>{
    return this.http.get('http://localhost:8888/motoristas/',{});
  }

}
