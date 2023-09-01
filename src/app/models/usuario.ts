export interface Usuario {
    uid: string | any; // id para autentificación de Firebase
    nombre1: string; // -> nombre
    nombre: string; // -> email
    rol: string; // -> roles
    contrasena: string;
}