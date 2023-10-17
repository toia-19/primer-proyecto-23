import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-collares',
  templateUrl: './card-collares.component.html',
  styleUrls: ['./card-collares.component.css']
})
export class CardCollaresComponent {
  // coleccion Productos -> accedemos a todos
  coleccionProductos: Producto[] = [];

  // coleccion especificamente para los collares o la que queramos filtrar
  collares: Producto[] = [];

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  constructor(
    public servicioCrud: CrudService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto =>{
      this.coleccionProductos = producto;

      // llamamos función mostrarCollares
      this.mostrarCollares();
    })
  }

  mostrarVer(info: Producto){
    // va a ser para el botón ver más
    this.modalVisible = true;

    // asignamos la información del producto seleccionado
    this.productoSeleccionado = info;
  }

  // función para mostrar esos productos específicos
  mostrarCollares(){
    // iteramos los productos con forEach y buscamos por categoría
    this.coleccionProductos.forEach(producto =>{
      if(producto.categoria === "collares"){ // filtramos la categoría de collares
        this.collares.push(producto);
      }
    })
  }
}
