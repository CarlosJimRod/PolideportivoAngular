import {Component} from '@angular/core';
import {Partido} from "../../models/partidos";
import {PartidosService} from "../../servicios/partidos.service";

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent {

  partidos: Partido[] = []
  buscador: string = ""

  constructor(private service: PartidosService) {
  }

  partidosFiltrados() {
    return this.partidos.filter(partido =>
      partido.idLocal.toLowerCase().includes(this.buscador.toLowerCase()) ||
      partido.idVisitante.toLowerCase().includes(this.buscador.toLowerCase()))
  }

  ngOnInit() {
    this.service.getPartidos().subscribe(partidos =>
      this.partidos = partidos)
  }
}
