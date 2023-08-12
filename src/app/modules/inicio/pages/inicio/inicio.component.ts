import { Component, OnInit } from '@angular/core';
// NUEVA INTERFAZ
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
        descripcion: "Foto de un Golden Retriever",
        imagen:"https://www.hepper.com/wp-content/uploads/2021/11/golden-retriever_Shutterstock.jpg",
        alt:"Golden Retriever"
      },
      {
        id: "",
        raza: "Rottweiler",
        descripcion: "Foto de un chihuahua",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Rottweiler_kopf_2.jpg/366px-Rottweiler_kopf_2.jpg",
        alt:"Rottweiler"
      }
    ]
  }

  // EVENTO DE CONSTRUCCIÓN/ INICIALIZACIÓN
  ngOnInit(): void{
  }
}
