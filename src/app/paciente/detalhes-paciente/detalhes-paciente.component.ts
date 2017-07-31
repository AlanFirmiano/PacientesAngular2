import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { PacienteService } from '../paciente.service';
import { Paciente } from '../../_models/paciente';
import { pacienteAtividade } from '../../_models/pacienteAtividade';
@Component({
  selector: 'app-detalhes-paciente',
  templateUrl: './detalhes-paciente.component.html',
  styleUrls: ['./detalhes-paciente.component.css']
})
export class DetalhesPacienteComponent implements OnInit {

  id:number;
  paciente:Paciente = new Paciente();
  teste:string[];
  inscricao:Subscription;
  atividades:pacienteAtividade[] = [];

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private servico :PacienteService) {}


  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params:any) => {
        this.id = params['id'];
        this.servico.detalhesPaciente(this.id).subscribe(
          res => this.paciente = res
        );
        this.servico.listaAtividades(this.id).subscribe(
          res => this.atividades = res
        );
        if(this.paciente == null){
          this.router.navigate(['']);
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
