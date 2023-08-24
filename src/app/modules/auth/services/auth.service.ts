import { Injectable } from '@angular/core';
// importamos servicio de autentificación de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // referenciar Autentificación de Firebase
  constructor(public auth: AngularFireAuth) { }

  // función para retornar nueva información para nombre y contrasena
  registrar(nombre: string, contrasena: string){
    return this.auth.createUserWithEmailAndPassword(nombre,contrasena);
  }
}
