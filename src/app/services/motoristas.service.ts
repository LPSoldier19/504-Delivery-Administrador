import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  constructor(private http:HttpClient) { }

  obtenerSolicitudes():Observable<any>{
    return this.http.get('http://localhost:8888/motoristas/solicitud/pendiente',{});
  }

  obtenerMotoristas():Observable<any>{
    return this.http.get('http://localhost:8888/motoristas/',{});
  }

  aceptarMotorista(idMotorista:any):Observable<any>{
    return this.http.put(`http://localhost:8888/motoristas/${idMotorista}/aceptar`,{});
  }

  rechazarMotorista(idMotorista:any):Observable<any>{
    return this.http.put(`http://localhost:8888/motoristas/${idMotorista}/rechazar`,{});
  }

}
