import { Component, OnInit } from '@angular/core';
import { AtividadeService } from '../atividade.service';
import { Atividade } from 'app/_models/atividade';
import { ToastService } from 'app/toast.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-lista-atividade',
  templateUrl: './lista-atividade.component.html',
  styleUrls: ['./lista-atividade.component.css']
})
export class ListaAtividadeComponent implements OnInit {
  listaAtividade: Atividade[] = [];
  fullImagePath : string;
  constructor(private servico :AtividadeService,private router:Router, private toastService:ToastService) {
    this.listar();
    this.fullImagePath = '/assets/images/teste.png'
  }

  listar(){
    this.servico.listaAtividade().subscribe(
      res => this.listaAtividade = res
    );
  }
  remover(atividade:Atividade){
    this.servico.removerAtividade(atividade).subscribe(
      res => {
        this.toastService.toast(res,"green pulse");
        this.listar();
      },
      err => this.toastService.toast(err,"red pulse")
  );

  }

  editar(atividade:Atividade){
    this.servico.atividade = atividade;
    this.router.navigate(['atividade/editar']);
  }
  ngOnInit() {
  }

}
