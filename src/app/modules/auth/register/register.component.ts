import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; // esto es del input

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    contrasena: ''
  }

  // servicioAuth referencia a nuestro servicio Auth
  constructor(public servicioAuth: AuthService){
  }

  // tomamos nuevos registros y mostramos los resultados
  async registrarse(){
    const credenciales = {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena
    };

    const res = await this.servicioAuth.registrar(credenciales.nombre,credenciales.contrasena).catch(error => {console.log('error =>',error)});
    
    console.log(res);
  }
}
