import { Component } from '@angular/core';
import {Partido} from "../../models/partidos";
import {PartidosService} from "../../servicios/partidos.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent {

  partidos$: Observable<Partido[]>

  constructor(private service: PartidosService) {
  }

  ngOnInit() {
    this.partidos$ = this.service.getPartidos()
  }
}
