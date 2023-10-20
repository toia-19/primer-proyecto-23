import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-collares',
  templateUrl: './card-collares.component.html',
  styleUrls: ['./card-collares.component.css']
})
export class CardCollaresComponent {
  coleccionProductos: Producto[] = []; // todos los productos

  collares: Producto[] = []; // productos categoría = collares

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  constructor(
    public servicioCrud: CrudService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      this.coleccionProductos = producto;

      this.mostrarCollares();
    })
  }

  mostrarVer(info: Producto){
    // al seleccionar "ver más" el modal visible pasa a "true"
    this.modalVisible = true;
    // muestra la información del producto que se seleccione
    this.productoSeleccionado = info;
  }

  mostrarCollares(){
    // forEach itera la colección/ arreglo
    this.coleccionProductos.forEach(producto =>{
      /* si la categoría del producto es igual a "collares"
        se va a enviar a la colección "collares"*/
      if(producto.categoria === "collares"){
        this.collares.push(producto);
      }
    })
  }
}
