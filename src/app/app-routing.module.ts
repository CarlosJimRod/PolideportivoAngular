import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./comun/home/home.component";
import {NoDisponibleComponent} from "./comun/no-disponible/no-disponible.component";
import {ComunModule} from "./comun/comun.module";
import {PartidosComponent} from "./partidos/partidos/partidos.component";
import {EquiposComponent} from "./equipos/equipos/equipos.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./comun/comun.module').then(m => ComunModule)
  },
  {
    path: 'partidos',
    component: PartidosComponent,
    loadChildren: () => import('./partidos/partidos.module').then(m => m.PartidosModule)
  },
  {
    path: 'equipos',
    component: EquiposComponent,
    loadChildren: () => import('./equipos/equipos.module').then(m => m.EquiposModule)
  },
  {
    path: '**',
    component: NoDisponibleComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
