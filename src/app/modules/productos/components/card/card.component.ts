import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // COLECCION PARA PRODUCTOS BASADA EN LA INTERFAZ PRODUCTO
  coleccionProductos: Producto[] = [];

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  constructor(
    public servicioCrud: CrudService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  mostrarVer(info: Producto){ // botón de la card -> ver más información
    this.modalVisible = true;

    // mostramos la información del producto
    this.productoSeleccionado = info;
  }
}
