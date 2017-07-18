import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AtividadeService } from './atividade.service';
import { AtividadeComponent } from './atividade.component';
import { NovaAtividadeComponent } from './nova-atividade/nova-atividade.component';
import { ListaAtividadeComponent } from './lista-atividade/lista-atividade.component';
import { MaterializeModule } from 'angular2-materialize';
import { AtividadeRoutingModule } from './atividade.router.module';
import { ToastService } from 'app/toast.service';
@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    FormsModule,
    AtividadeRoutingModule
  ],
  providers: [AtividadeService, ToastService],
  declarations: [
    AtividadeComponent,
    NovaAtividadeComponent,
    ListaAtividadeComponent
  ],
  exports: [AtividadeComponent,ListaAtividadeComponent,NovaAtividadeComponent]
})
export class AtividadeModule { }
