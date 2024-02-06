import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PartidoListComponent} from "./partido-list/partido-list.component";

const routes: Routes = [
  {path: '', component: PartidoListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule {
}
