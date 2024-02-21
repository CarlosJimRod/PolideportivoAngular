import {Component, OnInit} from '@angular/core';
import {PartidosService} from "../../servicios/partidos.service";
import {Partido} from "../../models/partidos";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-partido-detail',
  templateUrl: './partido-detail.component.html',
  styleUrls: ['./partido-detail.component.css']
})
export class PartidoDetailComponent implements OnInit {

  partido: Partido

  constructor(private partidosService: PartidosService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idPartido = params.get('idPartido')
      if (idPartido != null) {
        this.partido = this.partidosService.getPartidoById(idPartido)
      }
    })
  }

  contarGolesPorEquipo(equipoId: string) {
    let goles = 0
    for (let gol of this.partido.goles!) {
      if (gol.idParticipante == equipoId) {
        goles++
      }
    }
    return goles
  }

  eliminarPartido() {
    this.partidosService.deletePartido(this.partido.idPartido)
  }

  editarPartido() {

  }
}
