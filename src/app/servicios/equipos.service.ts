import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Equipo} from "../models/equipos";
import {equipos_data} from "../data/equipos.data";

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  getEquipos(): Observable<Equipo[]> {
    return of(equipos_data)
  }

  getEquipoById(idEquipo: string): Equipo {
    let returnEquipo: Equipo
    for (let equipo of equipos_data) {
      if (equipo.id == idEquipo) {
        returnEquipo = equipo
      }
    }
    return returnEquipo!
  }

  setEquipo(equipo: Equipo) {
    equipos_data.push(equipo)
  }

  deleteEquipo(idEquipo: string) {
    for (let x = 0; x < equipos_data.length; x++) {
      if (equipos_data[x].id == idEquipo) {
        equipos_data.splice(x, 1)
      }
    }
  }
}
