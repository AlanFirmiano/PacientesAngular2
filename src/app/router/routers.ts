import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {path:'', redirectTo:'/login', pathMatch:"full"},
  {path:'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path:'paciente', loadChildren:'app/paciente/paciente.module#PacienteModule'},
  {path:'atividade', loadChildren: 'app/atividade/atividade.module#AtividadeModule'}

]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
