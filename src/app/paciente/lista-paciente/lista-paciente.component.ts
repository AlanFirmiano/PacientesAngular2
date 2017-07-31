import { Component, OnInit } from '@angular/core';
import { ToastService } from 'app/toast.service';
import { Router } from "@angular/router";

import { PacienteService } from '../paciente.service';
import { Paciente } from '../../_models/paciente';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

  listaPaciente :Paciente[] = [];

  constructor(private servico :PacienteService, private toastService: ToastService, private router: Router) {

  }

  listar(){
    this.servico.listaPaciente().subscribe(
      res => this.listaPaciente = res
    );
  }

  remover(paciente:Paciente){
    this.servico.removerPaciente(paciente).subscribe(
      res => {
        this.toastService.toast(res,"green");
        this.listar();
      },
      err => this.toastService.toast(err,"red")
    );
  }

  editar(paciente:Paciente){
    this.servico.paciente = paciente;
    this.router.navigate(['paciente/editar']);
  }

  ngOnInit() {
    this.listar();
  }

}
