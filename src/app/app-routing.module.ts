import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./comun/home/home.component";
import {PartidoListComponent} from "./partidos/partido-list/partido-list.component";
import {SucesoFormComponent} from "./partidos/suceso-form/suceso-form.component";
import {EquipoListComponent} from "./equipos/equipo-list/equipo-list.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'partidos', component: PartidoListComponent},
  {path:'equipos', component: EquipoListComponent},
  {path:'sucesos', component: SucesoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
