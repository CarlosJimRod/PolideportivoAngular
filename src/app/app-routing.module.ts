import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./comun/home/home.component";
import {PartidoListComponent} from "./partidos/partido-list/partido-list.component";
import {SucesoFormComponent} from "./partidos/suceso-form/suceso-form.component";
import {EquipoListComponent} from "./equipos/equipo-list/equipo-list.component";
import {NoDisponibleComponent} from "./comun/no-disponible/no-disponible.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'partidos', component: PartidoListComponent},
  {path:'equipos', component: NoDisponibleComponent},
  {path:'sucesos', component: NoDisponibleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
