import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-partido-form',
  templateUrl: './partido-form.component.html',
  styleUrls: ['./partido-form.component.css']
})
export class PartidoFormComponent {
  resultado!: string
  equipos = ["ATHCLU(ESP)", "DEPORT(ESP)", "FCBARC(ESP)", "VIREAL(ESP)", "MALAGA(ESP)", "EIBAR(ESP)", "GETAFE(ESP)", "BETIS(ESP)", "RMADRID(ESP)", "LEVANT(ESP)"]

  constructor(private fb: FormBuilder) {
  }

  formPartido = this.fb.group({
    equipoLocal: ['', Validators.required],
    equipoVisitante: ['', Validators.required]
  })

  submit() {
    if (this.formPartido.valid) {
      this.resultado = "Se han guardado los valores"
    } else {
      this.resultado = "Hay datos invalidos en el formulario"
    }
  }
}
