import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BarraComponent } from 'app/graficos/barra/barra.component';

const APP_ROUTES: Routes = [
  {path:"", component: BarraComponent}
]

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class GraficosRoutingModule {

}
