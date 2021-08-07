import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lista-motoristas',
  templateUrl: './lista-motoristas.component.html',
  styleUrls: ['./lista-motoristas.component.css']
})
export class ListaMotoristasComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Motoristas')
  }

}
