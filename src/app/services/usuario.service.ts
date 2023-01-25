import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario2!: Usuario;

  constructor(private router: Router) { }

  verificarToken() {
    let token = localStorage.getItem('token');
    if (token == null) {
      return false
    } else {
      this.usuario2 = new Usuario("root", "root", "Moises Guerrero");
      return true;
    }
  }


  login(datos: any) {
    let usuario = 'root';
    let pass = 'root';
    if (datos.usuario == usuario && datos.password == pass) {
      localStorage.setItem('token', '123456789');
      this.usuario2 = new Usuario(datos.usuario, datos.password, "Moises Guerrero");

      console.log(this.usuario2);
      this.router.navigateByUrl('/principal');
      return this.usuario2;
    } else {
      return "Usuario y/o contraseñas incorrecta"
    }
  }
}
