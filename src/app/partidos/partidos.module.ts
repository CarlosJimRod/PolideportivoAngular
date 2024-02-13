import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartidoListComponent} from './partido-list/partido-list.component';
import {PartidoDetailComponent} from './partido-detail/partido-detail.component';
import {PartidoFormComponent} from './partido-form/partido-form.component';
import {SucesoFormComponent} from './suceso-form/suceso-form.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PartidosComponent} from './partidos/partidos.component';
import {PartidosRoutingModule} from "./partidos-routing.module";


@NgModule({
  declarations: [
    PartidoListComponent,
    PartidoDetailComponent,
    PartidoFormComponent,
    SucesoFormComponent,
    PartidosComponent
  ],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    RouterLink,
    FormsModule,
    RouterOutlet,
    ReactiveFormsModule
  ]
})
export class PartidosModule { }
