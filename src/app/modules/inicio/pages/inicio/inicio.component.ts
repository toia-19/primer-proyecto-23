import { Component, OnInit } from '@angular/core';
// IMPORTAMOS INTERFAZ 'INICIO'
import { TarjetaInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: TarjetaInicio[];

  // INICIALIZA LA PROPIEDAD INFO
  constructor(){
    this.info = [
      {
        titulo: "Tarjeta 1",
        descripcion: "Un perrito",
        imagen: "https://www.hepper.com/wp-content/uploads/2021/11/golden-retriever_Shutterstock.jpg",
        alt: "Golden Retriever"
      },
      {
        titulo: "Tarjeta 1",
        descripcion: "Un perrito",
        imagen: "https://www.hepper.com/wp-content/uploads/2021/11/golden-retriever_Shutterstock.jpg",
        alt: "Golden Retriever"
      },
      {
        titulo: "Tarjeta 1",
        descripcion: "Un perrito",
        imagen: "https://www.hepper.com/wp-content/uploads/2021/11/golden-retriever_Shutterstock.jpg",
        alt: "Golden Retriever"
      }
    ]
  }

  // EVENTO DE CONSTRUCCIÓN/ INICIALIZACIÓN
  ngOnInit(): void{}
}
