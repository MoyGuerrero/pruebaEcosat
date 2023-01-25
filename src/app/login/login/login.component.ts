import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mostrarError: boolean = true;

  public login = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required],
    rusuario: [false, Validators.required]
  })

  constructor(private fb: FormBuilder, private us: UsuarioService) { }

  ngOnInit(): void {

  }

  iniciar_sesion() {
    if (this.us.login(this.login.value) == undefined) {
      this.mostrarError = true;
      return
    }
    this.us.login(this.login.value);

  }

  validarCampo(campo: string) {
    return this.login.get(campo)?.errors && this.login.get(campo)?.touched
  }
}
