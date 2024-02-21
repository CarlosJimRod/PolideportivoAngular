import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EquipoListComponent} from "./equipo-list/equipo-list.component";
import {EquipoFormComponent} from "./equipo-form/equipo-form.component";
import {EquipoDetailComponent} from "./equipo-detail/equipo-detail.component";

const routes: Routes = [
  {
    path: '',
    component: EquipoListComponent
  },
  {
    path: 'form',
    component: EquipoFormComponent
  },
  {
    path: 'detail/:idEquipo',
    component: EquipoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquiposRoutingModule {
}
