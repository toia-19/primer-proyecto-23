import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; // input de contraseña

  // definimos de forma pública el servicioAuth
  constructor(public servicioAuth: AuthService){}

  // importación del modelo
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    contrasena: ''
  }

  // tomando nuevo registro
  // ASYNC = ASINCRONICO
  async registrarse(){
    const credenciales = {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena
    };

    const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contrasena)
    .then(res =>{
      alert("Ha agregado un nuevo usuario con éxito :)");
    })

    console.log(res)
  }
}
