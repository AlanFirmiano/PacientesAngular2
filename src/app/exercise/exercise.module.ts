import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ExerciseService } from './exercise.service';
import { ExerciseComponent } from './exercise.component';
import { NewExerciseComponent } from './new-exercise/new-exercise.component';
import { ListExerciseComponent } from './list-exercise/list-exercise.component';
import { MaterializeModule } from 'angular2-materialize';
import { ExerciseRoutingModule } from './exercise.router.module';
import { ToastService } from 'app/toast.service';
@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    FormsModule,
    ExerciseRoutingModule
  ],
  providers: [ExerciseService, ToastService],
  declarations: [
    ExerciseComponent,
    NewExerciseComponent,
    ListExerciseComponent
  ],
  exports: [ExerciseComponent, ListExerciseComponent, NewExerciseComponent]
})
export class ExerciseModule { }
