import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquipoListComponent} from './equipo-list/equipo-list.component';
import {EquipoDetailComponent} from './equipo-detail/equipo-detail.component';
import {EquipoFormComponent} from './equipo-form/equipo-form.component';
import {EquiposComponent} from './equipos/equipos.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {EquiposRoutingModule} from "./equipos-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EquipoListComponent,
    EquipoDetailComponent,
    EquipoFormComponent,
    EquiposComponent
  ],
  imports: [
    EquiposRoutingModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EquiposModule { }
