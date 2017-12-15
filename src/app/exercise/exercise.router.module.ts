import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ListExerciseComponent } from 'app/exercise/list-exercise/list-exercise.component';
import { NewExerciseComponent } from 'app/exercise/new-exercise/new-exercise.component';

const APP_ROUTES: Routes = [
  {path: '', component: ListExerciseComponent},
  {path: 'adicionar', component: NewExerciseComponent},
  {path: 'editar', component: NewExerciseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule {

}
