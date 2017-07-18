import { Component, OnInit } from '@angular/core';
import { AtividadeService } from './atividade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {

  constructor(private servico:AtividadeService, private rota:Router) {}
  
  ngOnInit() {
  }

}
