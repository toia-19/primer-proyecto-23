import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  // referenciamos colección en la base de datos
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) {
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }

  agregarUsuario(usuario: Usuario, id: string){
    // RESOLVE -> resuelto (similar al then)
    // REJECT -> rechazo (similar al catch)
    return new Promise(async(resolve, reject) => {
      // hace una CAPTURA DE LOS DATOS -> similar screenshot
      try{
        usuario.uid = id;

        const resultado = await this.usuariosCollection.doc(id).set(usuario);

        // retornará el resultado
        resolve(resultado)
      } catch (error){

        // retornará el error
        reject(error)
      }
    })
  }
}
