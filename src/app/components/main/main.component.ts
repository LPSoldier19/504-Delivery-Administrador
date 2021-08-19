import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  pedidos:any=[];

  constructor(private title:Title, private pedidosService:PedidosService) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Pagina Principal')

    this.pedidosService.obtenerUltimosPedidos().subscribe(
      res=>{
        this.pedidos=res;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
