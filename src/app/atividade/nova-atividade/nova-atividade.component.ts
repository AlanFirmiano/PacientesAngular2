import { Component, OnInit } from '@angular/core';
import { Atividade } from 'app/_models/atividade';
import { AtividadeService } from 'app/atividade/atividade.service';
import { ToastService } from 'app/toast.service';
@Component({
  selector: 'app-nova-atividade',
  templateUrl: './nova-atividade.component.html',
  styleUrls: ['./nova-atividade.component.css']
})
export class NovaAtividadeComponent implements OnInit {
  atividade: Atividade = new Atividade();
  constructor(private servico : AtividadeService, private toastService:ToastService) { }

  save(){
    this.servico.salvarAtividade(this.atividade).subscribe(
      res => this.toastService.toast(res,"green pulse"),

      err => this.toastService.toast(err,"red pulse")
  );

  }

  ngOnInit() {
  }

}
