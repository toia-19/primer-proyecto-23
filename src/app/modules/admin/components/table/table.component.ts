import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  coleccionProductos: Producto [] = [];

  productoSeleccionado!: Producto; // ! -> toma valores vacíos

  modalVisibleProducto: boolean = false;

  // modalVisible: boolean = false;

  // eliminarVisible: boolean = false;

  // ENLAZA NUESTRO FORMULARIO
  producto = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required),
    categoria: new FormControl('',Validators.required)
  })

  constructor(
    // llamamos servicio Crud
    public servicioCrud: CrudService
  ){}

  ngOnInit(): void{
    /* llamamos función obtenerProducto y le enviamos los nuevos valores
    del formulario producto (se guardan en la colección) */
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto(){
    if (this.producto.valid){
      let nuevoProducto: Producto = {
        idProducto: '', // único que guardamos vacío; lo creamos en el CRUD
        nombre: this.producto.value.nombre!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
        descripcion: this.producto.value.descripcion!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!
      };

      // ENVIAMOS NUESTRO NUEVO PRODUCTO
      await this.servicioCrud.crearProducto(nuevoProducto)
      .then(producto => {
        alert("Ha agregado un nuevo producto con éxito :)");
      })
      .catch(error => {
        alert("Hubo un error al cargar el nuevo producto :( \n"+error);
      })
    }
  }
}
