import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { ToastService } from 'app/toast.service';
import { PermitionService } from "./permition.service";
import { NewPermitionComponent } from "./new-permition/new-permition.component";
import { ListPermitionComponent } from "./list-permition/list-permition.component";
import { PermitionComponent } from "./permition.component";
import { PermitionRouterModule } from "./permition.router.module";
@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    FormsModule,
    PermitionRouterModule
  ],
  providers: [PermitionService, ToastService],
  declarations: [
    PermitionComponent,
    ListPermitionComponent,
    NewPermitionComponent
  ],
  exports: [
    PermitionComponent,
    ListPermitionComponent,
    NewPermitionComponent
  ]
})
export class PermitionModule {}
