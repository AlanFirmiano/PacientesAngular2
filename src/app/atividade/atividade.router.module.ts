import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ListaAtividadeComponent } from 'app/atividade/lista-atividade/lista-atividade.component';
import { NovaAtividadeComponent } from 'app/atividade/nova-atividade/nova-atividade.component';

const APP_ROUTES: Routes = [
  {path:"", component:ListaAtividadeComponent},
  {path:"adicionar", component:NovaAtividadeComponent}
]

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class AtividadeRoutingModule {

}
