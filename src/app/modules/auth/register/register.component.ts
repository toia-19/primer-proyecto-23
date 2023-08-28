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

  uid = '';

  // servicioAuth referencia a nuestro servicio Auth
  constructor(public servicioAuth: AuthService) {
  }

  // tomamos nuevos registros y mostramos los resultados
  async registrarse() {
    const credenciales = {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena
    };

    const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contrasena)
    // el método THEN nos devuelve el mismo valor que guarda la promesa
    .then(res =>{
      alert("Ha agregado un nuevo usuario con éxito :)");
    })
    // el método CATCH creará un error en caso de que las cosas salgan mal
    .catch(error => 
      alert("Hubo un error al cargar el usuario :( \n"+error)
    );

    const uid = await this.servicioAuth.getUid();

    this.usuarios.uid = uid;
  }
}
