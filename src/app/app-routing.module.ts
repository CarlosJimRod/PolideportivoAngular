import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./comun/home/home.component";
import {PartidoListComponent} from "./partidos/partido-list/partido-list.component";
import {NoDisponibleComponent} from "./comun/no-disponible/no-disponible.component";
import {ComunModule} from "./comun/comun.module";

const routes: Routes = [
  {path: '', component: HomeComponent, loadChildren: () => import('./comun/comun.module').then(m => ComunModule)},
  {
    path: 'partidos',
    component: PartidoListComponent,
    loadChildren: () => import('./partidos/partidos.module').then(m => m.PartidosModule)
  },
  {path: '**', component: NoDisponibleComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
