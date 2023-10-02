import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  coleccionProductos: Producto[] = [];

  productoSeleccionado!: Producto; // toma valores vacíos o "any"

  modalVisible: boolean = false;

  constructor(
    // declaramos el servicio CRUD
    public servicioCrud: CrudService
  ){}

  ngOnInit(): void{
    /* del servicio Crud, llamamos a obtener producto y los guardamos
    en la colección */
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      this.coleccionProductos = producto;
    })
  }

  // SÓLO VA A VISUALIZAR LA INFORMACIÓN DEL PRODUCTO
  mostrarVer(info: Producto){
    this.modalVisible = true;

    // info resguarda la información del producto seleccionado
    this.productoSeleccionado = info;
  }
}
