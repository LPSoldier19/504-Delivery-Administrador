import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URLAdmin = "http://localhost:8888/administrador";

  constructor(private http: HttpClient, private router: Router) { }

  login(admin:any){
    return this.http.post<any>(this.URLAdmin, admin);
  }

  loggedIn():Boolean{
    if (localStorage.getItem('token')){
      return true
    }
    else{
      return false
    }
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('adminID');
    this.router.navigate(['']);
  }
}
