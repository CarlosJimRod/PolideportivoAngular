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
  idPartido: string
  partidos: Partido[]
  partido: Partido

  constructor(private partidosService: PartidosService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.idPartido = this.route.snapshot.params['idPartido']
    this.partidosService.getPartidos().subscribe(partidos =>
      this.partidos = partidos
    )
    for (let partido of this.partidos) {
      if (partido.idPartido.toString() == this.idPartido) {
        this.partido = partido
      }
    }
  }

}
