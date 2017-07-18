import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/_models/paciente';
import { PacienteService } from 'app/paciente/paciente.service';
import { ToastService } from 'app/toast.service';

@Component({
  selector: 'app-novo-paciente',
  templateUrl: './novo-paciente.component.html',
  styleUrls: ['./novo-paciente.component.css']
})
export class NovoPacienteComponent implements OnInit {
  paciente: Paciente = new Paciente();
  constructor(private servico : PacienteService, private toastService:ToastService) {}

  save(){
    this.paciente.matricula = "20172016005";
    this.servico.salvarPaciente(this.paciente).subscribe(
      res => this.toastService.toast(res,"green pulse"),

      err => this.toastService.toast(err,"red pulse")
  );

  }

  ngOnInit() {
  }

}
