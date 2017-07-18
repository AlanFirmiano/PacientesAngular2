import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../../_models/paciente';
import { ToastService } from 'app/toast.service';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

  listaPaciente :Paciente[] = [];

  constructor(private servico :PacienteService, private toastService: ToastService) {

    this.servico.listaPaciente().subscribe(
      res => this.listaPaciente = res
    );
  }
  listar(){
    this.servico.listaPaciente().subscribe(
      res => this.listaPaciente = res
    );
  }
  remover(paciente:Paciente){
    this.servico.removerPaciente(paciente).subscribe(
      res => {
        this.toastService.toast(res,"green pulse");
        this.listar();
      },
      err => this.toastService.toast(err,"red pulse")
  );

  }
  ngOnInit() {

  }

}
