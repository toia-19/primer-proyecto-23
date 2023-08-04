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
    this.info = []
  }

  // EVENTO DE CONSTRUCCIÓN/ INICIALIZACIÓN
  ngOnInit(): void{
  }
}
