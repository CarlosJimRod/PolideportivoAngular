import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ValidacionForm} from "./ValidacionForm";

@Component({
  selector: 'app-partido-form',
  templateUrl: './partido-form.component.html',
  styleUrls: ['./partido-form.component.css']
})
export class PartidoFormComponent {
  resultado!: string
  equipos = ["--selecciona un equipo--", "ATHCLU(ESP)", "DEPORT(ESP)", "FCBARC(ESP)", "VIREAL(ESP)", "MALAGA(ESP)", "EIBAR(ESP)", "GETAFE(ESP)", "BETIS(ESP)", "RMADRID(ESP)", "LEVANT(ESP)"]

  constructor(private fb: FormBuilder) {
  }

  formPartido = this.fb.group({
    equipoLocal: ["--selecciona un equipo--", ValidacionForm.equipoRequired],
    equipoVisitante: ["--selecciona un equipo--", ValidacionForm.equipoRequired]
  })

  submit() {
    if (this.formPartido.valid) {
      this.resultado = "Se han guardado los valores"
    } else {
      this.resultado = "Hay datos invalidos en el formulario"
    }
  }
}
