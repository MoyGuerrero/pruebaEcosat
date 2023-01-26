import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mostrarError: boolean = true;

  public login = this.fb.group({
    nickname: ['', Validators.required],
    password: ['', Validators.required],
    rusuario: [false, Validators.required]
  })

  constructor(private fb: FormBuilder, private us: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    const nickname = localStorage.getItem('nickname')

    console.log(nickname);

    if (nickname != null) {
      this.login.get('rusuario')?.setValue(true);
      this.login.get('nickname')?.setValue(nickname);
    }
  }

  iniciar_sesion() {
    this.us.login(this.login.value).subscribe({
      next: res => this.router.navigateByUrl('/principal'),
      error: err => {
        console.error(err);
        Swal.fire('Error', err.error.msg, 'warning')
      }
    });
  }

  validarCampo(campo: string) {
    return this.login.get(campo)?.errors && this.login.get(campo)?.touched
  }
}
