import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private usuarioServices: UsuarioService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log(this.usuarioServices.verificarToken())

    if (this.usuarioServices.verificarToken() == false) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return this.usuarioServices.verificarToken()
    }
  }

}
