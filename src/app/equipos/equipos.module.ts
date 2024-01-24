import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoListComponent } from './equipo-list/equipo-list.component';
import { EquipoDetailComponent } from './equipo-detail/equipo-detail.component';
import { EquipoFormComponent } from './equipo-form/equipo-form.component';



@NgModule({
  declarations: [
    EquipoListComponent,
    EquipoDetailComponent,
    EquipoFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EquiposModule { }
