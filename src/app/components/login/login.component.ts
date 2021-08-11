import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

// import {MainComponent} from '../main/main.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo:any=null;
  password:any=null;


  admin={correo:this.correo,password:this.password};

  constructor(private title:Title, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Iniciar Sesión')
  }

  login(){
    this.authService.login(this.admin).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
      error=>{
        console.log(error);
      })
  }

}
