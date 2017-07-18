import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginService } from 'app/login/login.service';
import { LoginComponent } from 'app/login/login.component';
import { MaterializeModule } from 'angular2-materialize';
import { ToastService } from 'app/toast.service';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    FormsModule
  ],
  providers: [
    LoginService, ToastService
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
