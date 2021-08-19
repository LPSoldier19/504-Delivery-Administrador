import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import { MotoristasService } from 'src/app/services/motoristas.service';

@Component({
  selector: 'app-solicitudes-motoristas',
  templateUrl: './solicitudes-motoristas.component.html',
  styleUrls: ['./solicitudes-motoristas.component.css']
})
export class SolicitudesMotoristasComponent implements OnInit {

  faCheck = faCheck;
  faBan = faBan;

  solicitudes:any=[];

  constructor(private title:Title, private motoristasService:MotoristasService) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Solicitudes')

    this.motoristasService.obtenerSolicitudes().subscribe(
      res=>{
        this.solicitudes=res;
      },
      error=>{
        console.log(error);
      }
    )
  }

  verSolicitudes(){
    this.motoristasService.obtenerSolicitudes().subscribe(
      res=>{
        this.solicitudes=res;
      },
      error=>{
        console.log(error);
      }
    )
  }

  aceptarSolicitud(idMotorista:any){
    this.motoristasService.aceptarMotorista(idMotorista).subscribe(
    res=>{
      this.verSolicitudes();
    },
    error=>{
      console.log(error);
    }
    )
  }

  negarSolicitud(idMotorista:any){
    this.motoristasService.rechazarMotorista(idMotorista).subscribe(
      res=>{
        this.verSolicitudes();
      },
      error=>{
        console.log(error);
      }
      )
  }

}
