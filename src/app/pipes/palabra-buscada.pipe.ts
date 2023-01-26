import { Pipe, PipeTransform } from '@angular/core';
import { Tabla } from '../models/tabla.model';

@Pipe({
  name: 'palabraBuscada'
})
export class PalabraBuscadaPipe implements PipeTransform {

  transform(tabla: Tabla[], ubicacion: string, zona: string, sensor: string): unknown {

    if (!ubicacion && !zona && !sensor) {
      return tabla;
    } else if (!zona && !sensor) {
      return tabla.filter((info) => info.Ubicacion.toLowerCase().includes(ubicacion.toLowerCase()));
    } else if (!sensor) {
      return tabla.filter((info) => info.Ubicacion.toLowerCase().includes(ubicacion.toLowerCase()) || info.Zona.toLowerCase().includes(zona.toLowerCase()));
    } else {
      return tabla.filter((info) => info.Ubicacion.toLowerCase().includes(ubicacion.toLowerCase()) || info.Zona.toLowerCase().includes(zona.toLowerCase()) || info.Sensor.toLowerCase().includes(sensor.toLowerCase()))
    }
  }

}
