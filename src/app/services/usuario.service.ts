import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario2!: Usuario;

  constructor(private router: Router, private http: HttpClient) { }



  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  verificarToken() {
    return this.http.get(`${base_url}/usuario/renovar_token`, this.headers).pipe(
      tap((resp: any) => {
        const resultados = resp.result[0];
        const { id, nombre, nickname, activo } = resultados;

        this.usuario2 = new Usuario(id, nombre, nickname, activo)
        localStorage.setItem('token', resp.token)
      }),
      map(resp => true),
      catchError(err => of(false))
    );
  }

  login(datos: any) {

    if (datos.rusuario) {
      localStorage.setItem('nickname', datos.nickname);
    }else{
      localStorage.removeItem('nickname');
    }
    return this.http.post(`${base_url}/usuario/login`, datos).pipe(

      tap((resp: any) => localStorage.setItem('token', resp.token))
    )
  }
}
