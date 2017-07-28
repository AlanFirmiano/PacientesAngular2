import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DetalhesPacienteComponent } from 'app/paciente/detalhes-paciente/detalhes-paciente.component'
import { ListaPacienteComponent } from 'app/paciente/lista-paciente/lista-paciente.component'
import { NovoPacienteComponent } from 'app/paciente/novo-paciente/novo-paciente.component';

const APP_ROUTES: Routes = [
  {path:"", component:ListaPacienteComponent},
  {path:"adicionar", component:NovoPacienteComponent},
  {path:"detalhes/:id", component:DetalhesPacienteComponent},
  {path:"editar", component:NovoPacienteComponent}
]

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class PacienteRoutingModule {

}
