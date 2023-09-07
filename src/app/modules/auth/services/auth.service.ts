import { Injectable } from '@angular/core';
// importamos servicio de autentificación de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // referenciar Autentificación de Firebase
  constructor(public auth: AngularFireAuth) { }

  // función para el inicio de sesión
  iniciarSesion(email: string, contrasena: string){
    return this.auth.signInWithEmailAndPassword(email, contrasena);
  }

  cerrarSesion(){
    // devuelve una promesa vacía
    return this.auth.signOut();
  }

  // función para retornar nueva información para nombre y contrasena
  registrar(email: string, contrasena: string){
    return this.auth.createUserWithEmailAndPassword(email,contrasena);
  }

  // función asincronica para tomar UID
  async getUid(){
    // CURRENTUSER -> JUNTO A LA PROMESA, GENERA CAPTURA
    const user = await this.auth.currentUser;

    if(user == null){
      return null;
    }else{
      return user.uid;
    }
  }
}
