import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class ComunModule { }
