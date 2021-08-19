import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos-entregados',
  templateUrl: './pedidos-entregados.component.html',
  styleUrls: ['./pedidos-entregados.component.css']
})
export class PedidosEntregadosComponent implements OnInit {

  pedidosEntregados:any=[];

  constructor(private pedidosService:PedidosService, private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Pedidos Entregados');

    this.pedidosService.verPedidosEntregados().subscribe(
      res=>{
        this.pedidosEntregados = res;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
