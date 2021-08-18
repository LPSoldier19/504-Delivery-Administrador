import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MotoristasService } from 'src/app/services/motoristas.service';

@Component({
  selector: 'app-lista-motoristas',
  templateUrl: './lista-motoristas.component.html',
  styleUrls: ['./lista-motoristas.component.css']
})
export class ListaMotoristasComponent implements OnInit {

  motoristas:any=[];

  constructor(private title:Title, private motoristasService:MotoristasService) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Motoristas')

    this.motoristasService.obtenerMotoristas().subscribe(
      res=>{
        this.motoristas=res;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
