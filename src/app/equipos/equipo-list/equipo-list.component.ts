import {Component, OnInit} from '@angular/core';
import {Equipo} from "../../models/equipos";
import {EquiposService} from "../../servicios/equipos.service";
import {PartidosService} from "../../servicios/partidos.service";

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {

  equipos: Equipo[] = []
  buscador: string = ""

  constructor(private equiposService: EquiposService, private partidosService: PartidosService) {
  }

  ngOnInit() {
    this.equiposService.getEquipos().subscribe(equipos =>
      this.equipos = equipos
    )
  }

  equiposFiltrados() {
    return this.equipos.filter(equipo =>
      equipo.nombre.toLowerCase().includes(this.buscador.toLowerCase())
    )
  }

  countPartidos(id: string) {
    return this.partidosService.partidosTeam(id).length
  }
}
