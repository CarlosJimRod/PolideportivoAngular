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

  setPartido(partido: Partido) {
    partidos_data.push(partido)
  }
}
