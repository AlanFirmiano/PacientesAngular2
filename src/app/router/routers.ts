import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path: 'paciente', loadChildren: 'app/patient/patient.module#PatientModule'},
  {path: 'atividade', loadChildren: 'app/exercise/exercise.module#ExerciseModule'},
  {path: 'permissoes', loadChildren: 'app/permition/permition.module#PermitionModule'}
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
