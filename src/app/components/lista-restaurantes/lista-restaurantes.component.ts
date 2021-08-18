import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RestaurantesService } from 'src/app/services/restaurantes.service';

@Component({
  selector: 'app-lista-restaurantes',
  templateUrl: './lista-restaurantes.component.html',
  styleUrls: ['./lista-restaurantes.component.css']
})

export class ListaRestaurantesComponent implements OnInit {

  faTrash = faTrash;
  faPen = faPen
  closeResult = '';
  restaurantes:any=[];
  menu:any=[];

  constructor(private modalMenuRestaurante: NgbModal, private restaurantesService:RestaurantesService, private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Restaurantes');

    this.restaurantesService.obtenerRestaurantes().subscribe(
      res=>{
        this.restaurantes=res;
      },
      error=>{
        console.log(error);
      }
    )
  }

  verMenuRestaurante(restaurante:any, restauranteSeleccionado:any) {

    this.restaurantesService.obtenerMenuRestaurante(restauranteSeleccionado).subscribe(
      res=>{
        this.menu=res.menu;
      },
      error=>{
        console.log(error);
      }
    )

    this.modalMenuRestaurante.open(restaurante, {ariaLabelledBy: 'modal-basic-title', size:'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
