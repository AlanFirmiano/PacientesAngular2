import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { ExerciseModule } from './exercise/exercise.module';
import { AppRoutingModule } from './router/routers';
import { MaterializeModule } from 'angular2-materialize';
import { PatientModule } from './patient/patient.module';
import { LoginModule } from './login/login.module';
import { PermitionModule } from './permition/permition.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    PatientModule,
    ExerciseModule,
    PermitionModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
