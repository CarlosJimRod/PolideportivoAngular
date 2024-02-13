import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PartidoListComponent} from "./partido-list/partido-list.component";
import {PartidoFormComponent} from "./partido-form/partido-form.component";

const routes: Routes = [
  {
    path: '',
    component: PartidoListComponent
  },
  {
    path: 'form',
    component: PartidoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule {
}
