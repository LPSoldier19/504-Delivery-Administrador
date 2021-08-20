import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RestaurantesService } from 'src/app/services/restaurantes.service';

@Component({
  selector: 'app-agregar-restaurante',
  templateUrl: './agregar-restaurante.component.html',
  styleUrls: ['./agregar-restaurante.component.css']
})
export class AgregarRestauranteComponent implements OnInit {

  formularioNuevoRestaurante = new FormGroup({
    nombreRestaurante: new FormControl('', [Validators.required]),
    icono: new FormControl(null, [Validators.required]),
    impuesto: new FormControl('', [Validators.required, Validators.min(30), Validators.max(50)]),
  });

  constructor(private title:Title, private restaurantesService: RestaurantesService) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Nuevo Restaurante');
  }

  agregarNuevoRestaurante(){

    let formData = new FormData()

    // for (const key in this.formularioNuevoRestaurante.value) {
    //   formData.append(key, this.formularioNuevoRestaurante.value[key])
    // }

    formData.append('icono', this.formularioNuevoRestaurante.get('icono')?.value);
    formData.append('nombreRestaurante', this.formularioNuevoRestaurante.get('nombreRestaurante')?.value);
    formData.append('impuesto', this.formularioNuevoRestaurante.get('impuesto')?.value);


    if(this.formularioNuevoRestaurante.valid){
      this.restaurantesService.agregarNuevoRestaurante(formData).subscribe(
        res=>{
          console.log(res);
        },
        error=>{
          console.log(error);
        }
      )
    }
    else{
      alert('Todos los campos son obligatorios');
    }


  }

  verImagen(evt:any):void{

    this.formularioNuevoRestaurante.patchValue({
      icono: evt.target.files[0]
    });
  }

  

}
