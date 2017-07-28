import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PacienteService } from './paciente.service';
import { PacienteComponent } from './paciente.component';
import { ListaPacienteComponent } from './lista-paciente/lista-paciente.component';
import { NovoPacienteComponent } from './novo-paciente/novo-paciente.component';
import { DetalhesPacienteComponent } from './detalhes-paciente/detalhes-paciente.component';
import { MaterializeModule } from 'angular2-materialize';
import { PacienteRoutingModule } from './paciente.router.module';
import { ToastService } from 'app/toast.service';
@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    FormsModule,
    PacienteRoutingModule
  ],
  providers: [PacienteService, ToastService],
  declarations: [
    PacienteComponent,
    ListaPacienteComponent,
    NovoPacienteComponent,
    DetalhesPacienteComponent
  ],
  exports: [PacienteComponent,ListaPacienteComponent,NovoPacienteComponent,DetalhesPacienteComponent],
})
export class PacienteModule { }
