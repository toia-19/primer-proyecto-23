import { Injectable } from '@angular/core';
// Servicio de Autentificación de Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // referenciamos Auth de Firebase
  constructor(public auth: AngularFireAuth) { }

  // FUNCIÓN PARA REGISTER
  registrar(nombre: string, contrasena: string){
    // retorna nuevo valor de nombre y contrasena
    return this.auth.createUserWithEmailAndPassword(nombre,contrasena);
  }

  // FUNCIÓN PARA TOMAR UID
  async getUid(){
    // nos genera una promesa, y const user la captura
    const user = await this.auth.currentUser;

    if(user == null){
      return null;
    }else{
      return user.uid;
    }
  }
}