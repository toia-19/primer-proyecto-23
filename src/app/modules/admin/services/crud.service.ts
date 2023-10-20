import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'; // mapea valores -> similar a la función de un arreglo

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('productos')
  }

  // CRUD -> PRODUCTOS
  crearProducto(producto: Producto){
    return new Promise(async(resolve, reject) =>{
      try{
        const idProducto = this.database.createId();
        producto.idProducto = idProducto;

        const resultado = await this.productosCollection.doc(idProducto).set(producto)

        resolve(resultado);
      } catch (error){
        reject(error);
      }
    })
  }

  obtenerProducto(){
    // snapshotChanges -> toma captura del estado de los datos
    // pipe -> funciona como tubería, retorna el nuevo arreglo
    // map -> "mapea" o recorre esa nueva información
    // a -> resguarda la nueva información y la envía
    return this.productosCollection.snapshotChanges().
    pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  // envíamos el ID del producto y la nueva información
  modificarProducto(idProducto: string, nuevaData: Producto){
    return this.database.collection('productos').doc(idProducto).update(nuevaData);
  }

  // envíamos el ID del producto
  eliminarProducto(idProducto: string){
    return new Promise((resolve, reject) =>{
      try{
        const resp = this.productosCollection.doc(idProducto).delete()
        resolve (resp)
      }
      catch(error){
        reject (error)
      }
    })
  }
}
