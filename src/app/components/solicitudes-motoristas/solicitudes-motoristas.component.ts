import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-solicitudes-motoristas',
  templateUrl: './solicitudes-motoristas.component.html',
  styleUrls: ['./solicitudes-motoristas.component.css']
})
export class SolicitudesMotoristasComponent implements OnInit {

  faCheck = faCheck;
  faBan = faBan;

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Solicitudes')
  }

}
