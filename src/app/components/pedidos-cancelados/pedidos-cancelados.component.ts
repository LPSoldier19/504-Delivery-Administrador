import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos-cancelados',
  templateUrl: './pedidos-cancelados.component.html',
  styleUrls: ['./pedidos-cancelados.component.css']
})
export class PedidosCanceladosComponent implements OnInit {

  pedidosCancelados:any=[];

  constructor(private pedidosService:PedidosService, private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Pedidos Entregados');

    this.pedidosService.verPedidosCancelados().subscribe(
      res=>{
        this.pedidosCancelados = res;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
