import { Component, OnInit } from '@angular/core';
import { TablaService } from '../../services/tabla.service';
import { Tabla } from '../../models/tabla.model';
import { Sensor } from 'src/app/models/sensor.modal';
import { Ubicacion } from 'src/app/models/ubicacion.model';
import { Zona } from '../../models/zona.model';

@Component({
  selector: 'app-alertamiento',
  templateUrl: './alertamiento.component.html',
  styleUrls: ['./alertamiento.component.css']
})
export class AlertamientoComponent implements OnInit {

  public tabla: Tabla[] = []
  public sensor: Sensor[] = [];
  public ubicacion: Ubicacion[] = [];
  public zona3: Zona[] = [];

  constructor(private tablaService: TablaService) { }

  public zona: string = '';
  public zona1: string = '';
  public texto: string = '';
  public tiempo: string = '';
  public temperaturaActual: string = '';
  public Origen: string = '';
  public registro: string = '';

  public palabrau: string = ''
  public palabraz: string = ''
  public palabras: string = ''


  ngOnInit() {
    this.getDatos();
    this.getDatosUbicacion();
    this.getDatosSensor();
    this.getDatosZona();
  }


  getDatos() {
    this.tablaService.getDatos().subscribe({
      next: (tabla: any) => this.tabla = tabla.result,
      error: err => console.error(err.error.msg)

    });
  }

  getDatosUbicacion() {
    this.tablaService.getDatosUbicacion().subscribe({
      next: (tabla: any) => this.ubicacion = tabla.result,
      error: err => console.error(err.error.msg)

    });
  }

  getDatosZona() {
    this.tablaService.getDatosZona().subscribe({
      next: (tabla: any) => this.zona3 = tabla.result,
      error: err => console.error(err.error.msg)

    });
  }

  getDatosSensor() {
    this.tablaService.getDatosSensor().subscribe({
      next: (tabla: any) => this.sensor = tabla.result,
      error: err => console.error(err.error.msg)

    });
  }

  llenarDatos(datos: Tabla) {
    this.zona = datos.Zona
    this.zona1 = "Planta de filtrado"
    this.texto = datos.estado;
    this.tiempo = datos.tiempo
    this.temperaturaActual = datos.temperatura;
    this.Origen = datos.origen;
    this.registro = datos.registro;
  }
}
