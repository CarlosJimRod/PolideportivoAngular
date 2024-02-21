import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Partido} from "../models/partidos";
import {partidos_data} from "../data/partidos.data";

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  getPartidos () : Observable<Partido[]> {
    return of(partidos_data)
  }

  getPartidoById(idPartido: string): Partido {
    let returnPartido: Partido
    for (let partido of partidos_data) {
      if (partido.idPartido == idPartido) {
        returnPartido = partido
      }
    }
    return returnPartido!
  }

  setPartido(partido: Partido) {
    partidos_data.push(partido)
  }

  partidosTeam(id: string) {
    let partidos: Partido[] = []
    for (let partido of partidos_data) {
      if (partido.idLocal == id || partido.idVisitante == id) {
        partidos.push(partido)
      }
    }
    return partidos;
  }

  deletePartido(idPartido: string) {
    for (let x = 0; x < partidos_data.length; x++) {
      if (partidos_data[x].idPartido == idPartido) {
        partidos_data.splice(x, 1)
      }
    }
  }
}
