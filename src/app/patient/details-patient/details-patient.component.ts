import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { PatientService } from '../patient.service';
import { Patient } from '../../_models/patient';
import { Report } from '../../_models/report';
@Component({
  selector: 'app-detalhes-paciente',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.css']
})
export class DetailsPatientComponent implements OnInit {

  id:number;
  paciente:Patient = new Patient();
  teste:string[];
  inscricao:Subscription;
  atividades:Report[] = [];
  fullImagePath : string;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private servico :PatientService) {
      this.fullImagePath = '/assets/images/teste.png';
    }


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
