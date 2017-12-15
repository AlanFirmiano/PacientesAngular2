import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {ListPermitionComponent} from './list-permition/list-permition.component';
import {NewPermitionComponent} from './new-permition/new-permition.component';

const APP_ROUTES: Routes = [
  {path: '', component: ListPermitionComponent},
  {path: 'adicionar', component: NewPermitionComponent},
  {path: 'editar', component: NewPermitionComponent}
]

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class PermitionRouterModule {}
