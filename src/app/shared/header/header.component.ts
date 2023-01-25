import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public usuario!: Usuario;

  constructor(private us: UsuarioService, private router: Router) {

    this.usuario = us.usuario2;

    console.log(us.usuario2);
  }

  ngOnInit(): void {

  }

  Salir() {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('token');
  }

}
