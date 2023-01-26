import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tabla } from '../models/tabla.model';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class TablaService {

  constructor(private http: HttpClient) { }


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

  getDatos() {
    return this.http.get(`${base_url}/informacion/tabla`, this.headers)
  }
  getDatosUbicacion() {
    return this.http.get(`${base_url}/informacion/ubicacion`, this.headers)
  }
  getDatosZona() {
    return this.http.get(`${base_url}/informacion/zona`, this.headers)
  }
  getDatosSensor() {
    return this.http.get(`${base_url}/informacion/sensor`, this.headers)
  }
}
