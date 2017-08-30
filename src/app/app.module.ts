import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { AtividadeModule } from './atividade/atividade.module';
import { AppRoutingModule } from './router/routers';
import { MaterializeModule } from 'angular2-materialize';
import { PacienteModule } from './paciente/paciente.module';
import { LoginModule } from './login/login.module';
import { GraficosModule } from './graficos/graficos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    PacienteModule,
    AtividadeModule,
    GraficosModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
