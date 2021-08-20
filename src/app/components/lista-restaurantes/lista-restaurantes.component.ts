import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { FormControl, FormGroup, FormGroupName, Validators} from '@angular/forms';

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
  restauranteSeleccionado:any;
  imagen:any;

  formularioNuevoProducto = new FormGroup({
    nombreProducto: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required, Validators.min(50)]),
    imagenProducto: new FormControl(null, [Validators.required])
  });

  constructor(private modalMenuRestaurante: NgbModal, private restaurantesService:RestaurantesService, private title:Title, private modalAgregarProducto: NgbModal) { }

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

  verRestaurantes(){
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

    this.restauranteSeleccionado=restauranteSeleccionado;

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

  agregarProducto(añadirProducto:any) {


    this.modalAgregarProducto.open(añadirProducto, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  guardarNuevoProducto(){

    let formData = new FormData();



    formData.append('nombreProducto', this.formularioNuevoProducto.get('nombreProducto')?.value)
    formData.append('descripcion', this.formularioNuevoProducto.get('descripcion')?.value)
    formData.append('precio', this.formularioNuevoProducto.get('precio')?.value)
    formData.append('imagenProducto', this.imagen)


    this.restaurantesService.agregarNuevoProducto(this.restauranteSeleccionado, formData).subscribe(
      res=>{
        console.log(res);
        this.modalAgregarProducto.dismissAll();
        this.verRestaurantes();
      },
      error=>{
        console.log(error);
      }
    )


  }
  verImagenProducto(evt:any){
    this.imagen = evt.target.files[0];
  }

}
