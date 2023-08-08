import { Component, OnInit } from '@angular/core';
// IMPORTAMOS INTERFAZ 'INICIO'
import { Perro } from 'src/app/models/perro';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: Perro[];

  // INICIALIZA LA PROPIEDAD INFO
  constructor(){
    this.info = [
      {
        id: "",
        raza: "Golden",
        descripcion: "Es un perro amigable.",
        imagen: "https://www.hepper.com/wp-content/uploads/2021/11/golden-retriever_Shutterstock.jpg",
        alt: "Golden Retriever"
      },
      {
        id: "",
        raza: "Border Collie",
        descripcion: "Es un perro granjero.",
        imagen: "https://t2.uc.ltmcdn.com/es/posts/9/2/0/cuales_son_los_cuidados_de_un_border_collie_52029_orig.jpg",
        alt: "Border Collie"
      },
      {
        id: "",
        raza: "Rottweiler",
        descripcion: "Es un perro gordito y simpático.",
        imagen: "https://razacanina.com/wp-content/uploads/2019/10/Rottweiler4.jpg",
        alt: "Rottweiler"
      }
    ]
  }

  // EVENTO DE CONSTRUCCIÓN/ INICIALIZACIÓN
  ngOnInit(): void{}
}
