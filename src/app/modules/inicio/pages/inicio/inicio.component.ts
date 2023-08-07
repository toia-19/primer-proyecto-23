import { Component, OnInit } from '@angular/core';
// IMPORTAMOS NUESTRA INTERFAZ
import { TarjetasInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: TarjetasInicio[];

  // INICIALIZA LA PROPIEDAD INFO
  constructor(){
    this.info = [
      {
        titulo: "Tarjeta 1",
        descripcion: "Foto de un Golden Retriever",
        imagen:"https://www.hepper.com/wp-content/uploads/2021/11/golden-retriever_Shutterstock.jpg",
        alt:"Golden Retriever"
      }
    ]
  }

  // EVENTO DE CONSTRUCCIÓN/ INICIALIZACIÓN
  ngOnInit(): void{
  }
}
