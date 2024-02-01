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

  constructor(private service: PartidosService) {
  }

  ngOnInit() {
    this.service.getPartidos().subscribe(partidos =>
      this.partidos = partidos)
  }
}
