import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import {Router} from "@angular/router";

import { Paciente } from 'app/_models/paciente';
import { PacienteService } from 'app/paciente/paciente.service';
import { ToastService } from 'app/toast.service';

@Component({
  selector: 'app-novo-paciente',
  templateUrl: './novo-paciente.component.html',
  styleUrls: ['./novo-paciente.component.css']
})
export class NovoPacienteComponent implements OnInit {
  private paciente: Paciente;
  id:number;
  inscricao:Subscription;

  private aux: boolean = false;

  constructor(private servico : PacienteService, private toastService:ToastService, private router: Router) {}

  ngOnInit() {
    if(this.servico.paciente != null) {
       this.paciente = this.servico.paciente;
       this.aux = true;
    }else
      this.paciente = new Paciente();
  }

  save(){
    let data = new Date();
    this.paciente.matricula = ""+data.getFullYear()+(data.getMonth()+1)+data.getDate()+data.getHours()+data.getMinutes()+data.getSeconds();
    if(!this.aux){
      this.servico.salvarPaciente(this.paciente).subscribe(
        res => {
          this.toastService.toast(res,"green pulse");
          this.router.navigate(['']);
        },
        err => this.toastService.toast(err,"red pulse")
      );
    }else{
      this.servico.editarPaciente(this.paciente).subscribe(
        res => {
          this.toastService.toast(res,"green pulse");
        },
        err => this.toastService.toast(err,"red pulse")
      );
    }
  }



}
