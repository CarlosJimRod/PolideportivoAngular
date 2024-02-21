import {Component, OnInit} from '@angular/core';
import {EquiposService} from "../../servicios/equipos.service";
import {ActivatedRoute} from "@angular/router";
import {Equipo} from "../../models/equipos";
import {PartidosService} from "../../servicios/partidos.service";
import {Partido} from "../../models/partidos";

@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrls: ['./equipo-detail.component.css']
})
export class EquipoDetailComponent implements OnInit {
  equipo: Equipo
  partidosEquipo: Partido[]

  constructor(private equiposService: EquiposService, private route: ActivatedRoute, private partidosService: PartidosService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idEquipo = params.get('idEquipo')
      if (idEquipo != null) {
        this.equipo = this.equiposService.getEquipoById(idEquipo)
      }
    })
    this.partidosEquipo = this.partidosService.partidosTeam(this.equipo.id)
  }

  borrarEquipo() {
    this.equiposService.deleteEquipo(this.equipo.id)
  }
}
