import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ValidacionForm} from "./ValidacionForm";
import {PartidosService} from "../../servicios/partidos.service";
import {Partido} from "../../models/partidos";

@Component({
  selector: 'app-partido-form',
  templateUrl: './partido-form.component.html',
  styleUrls: ['./partido-form.component.css']
})
export class PartidoFormComponent implements OnInit {
  partidos: Partido[]
  idPartido: number
  equipos = ["--selecciona un equipo--", "ATHCLU(ESP)", "DEPORT(ESP)", "FCBARC(ESP)", "VIREAL(ESP)", "MALAGA(ESP)", "EIBAR(ESP)", "GETAFE(ESP)", "BETIS(ESP)", "RMADRID(ESP)", "LEVANT(ESP)"]

  constructor(private fb: FormBuilder, private partidosService: PartidosService) {
  }

  formPartido = this.fb.group({
    equipoLocal: ["--selecciona un equipo--", ValidacionForm.equipoRequired],
    equipoVisitante: ["--selecciona un equipo--", ValidacionForm.equipoRequired],
    date: ['', Validators.required],
    time: ['', Validators.required]
  })

  ngOnInit() {
    this.partidosService.getPartidos().subscribe(partidos =>
      this.partidos = partidos
    )
    this.idPartido = this.partidos.length
  }

  submit() {
    if (this.formPartido.valid) {
      this.partidosService.setPartido({
        idPartido: this.idPartido.toString(),
        idLocal: this.formPartido.value.equipoLocal!,
        idVisitante: this.formPartido.value.equipoVisitante!,
        fechaHora: this.formPartido.value.date!.toString() + " " + this.formPartido.value.time!.toString(),
        goles: [],
        tarjetas: []
      })
      this.formPartido.reset()
    }
  }
}
