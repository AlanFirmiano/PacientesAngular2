import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GraficosComponent } from 'app/graficos/graficos.component';
import { MaterializeModule } from 'angular2-materialize';
import { BarraComponent } from './barra/barra.component';
import { GraficosRoutingModule } from './graficos.router.module';
@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    FormsModule,
    GraficosRoutingModule
  ],
  declarations: [
    GraficosComponent,
    BarraComponent
  ],
  exports: [
    GraficosComponent, BarraComponent
  ]
})
export class GraficosModule { }
