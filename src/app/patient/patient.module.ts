import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PatientService } from './patient.service';
import { PatientComponent } from './patient.component';
import { ListPatientComponent } from './list-patient/lista-paciente.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { MaterializeModule } from 'angular2-materialize';
import { PatientRoutingModule } from './patient.router.module';
import { ToastService } from 'app/toast.service';
import { GraphicsPatientComponent } from './graphics-patient/graphics-patient.component';
@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    FormsModule,
    PatientRoutingModule
  ],
  providers: [PatientService, ToastService],
  declarations: [
    PatientComponent,
    ListPatientComponent,
    NewPatientComponent,
    DetailsPatientComponent,
    GraphicsPatientComponent
  ],
  exports: [
    PatientComponent,
    ListPatientComponent,
    NewPatientComponent,
    DetailsPatientComponent,
    GraphicsPatientComponent
  ],
})
export class PatientModule { }
