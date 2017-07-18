import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ListaPacienteComponent } from 'app/paciente/lista-paciente/lista-paciente.component'
import { NovoPacienteComponent } from 'app/paciente/novo-paciente/novo-paciente.component';

const APP_ROUTES: Routes = [
  {path:"", component:ListaPacienteComponent},
  {path:"adicionar", component:NovoPacienteComponent}
]

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class PacienteRoutingModule {

}
