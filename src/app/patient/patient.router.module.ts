import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DetailsPatientComponent } from 'app/patient/details-patient/details-patient.component';
import { ListPatientComponent } from 'app/patient/list-patient/lista-paciente.component';
import { NewPatientComponent } from 'app/patient/new-patient/new-patient.component';
import { GraphicsPatientComponent } from './graphics-patient/graphics-patient.component';

const APP_ROUTES: Routes = [
  {path:"", component:ListPatientComponent},
  {path:"adicionar", component:NewPatientComponent},
  {path:"detalhes/:id", component:DetailsPatientComponent},
  {path:"graficos/:id", component:GraphicsPatientComponent},
  {path:"editar", component:NewPatientComponent}
]

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class PatientRoutingModule {

}
