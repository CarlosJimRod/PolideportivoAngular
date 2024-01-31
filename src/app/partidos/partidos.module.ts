import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoListComponent } from './partido-list/partido-list.component';
import { PartidoDetailComponent } from './partido-detail/partido-detail.component';
import { PartidoFormComponent } from './partido-form/partido-form.component';
import { SucesoFormComponent } from './suceso-form/suceso-form.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    PartidoListComponent,
    PartidoDetailComponent,
    PartidoFormComponent,
    SucesoFormComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class PartidosModule { }
