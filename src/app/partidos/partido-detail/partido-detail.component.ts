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
  idLocal: string
  idVisitante: string
  partidos: Partido[]
  partido: Partido

  constructor(private partidosService: PartidosService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.idLocal = this.route.snapshot.params['idLocal']
    this.idVisitante = this.route.snapshot.params['idVisitante']
    this.partidosService.getPartidos().subscribe(partidos =>
      this.partidos = partidos
    )
    for (let partido of this.partidos) {
      if (partido.idLocal == this.idLocal && partido.idVisitante == this.idVisitante) {
        this.partido = partido
      }
    }
  }

}
