import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { Atividade } from 'app/_models/atividade';
import { AtividadeService } from 'app/atividade/atividade.service';
import { ToastService } from 'app/toast.service';
@Component({
  selector: 'app-nova-atividade',
  templateUrl: './nova-atividade.component.html',
  styleUrls: ['./nova-atividade.component.css']
})
export class NovaAtividadeComponent implements OnInit {
  private atividade: Atividade;
  private aux: boolean = false;
  constructor(private servico : AtividadeService, private toastService:ToastService, private router: Router) { }

  save(){
    if(!this.aux){
    this.servico.salvarAtividade(this.atividade).subscribe(
      res => {
        this.toastService.toast(res, "green");
      },
      err => {
        this.toastService.toast(err, "red");
      }
    );
  }else{
    this.servico.editarAtividade(this.atividade).subscribe(
      res => {
        this.toastService.toast(res,"green");
      },
      err => {
        this.toastService.toast(err,"red");
      }
    );
  }

  }

  ngOnInit() {
    if(this.servico.atividade != null) {
       this.atividade = this.servico.atividade;
       this.aux = true;
    }else
      this.atividade = new Atividade();
  }

}
