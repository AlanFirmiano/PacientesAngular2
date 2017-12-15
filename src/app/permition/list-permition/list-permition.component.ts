import { Component, OnInit } from '@angular/core';
import { ToastService } from 'app/toast.service';
import { Router } from '@angular/router';

import { PermitionService } from 'app/permition/permition.service';
import { Permition } from 'app/_models/permition';

@Component({
  selector: 'app-lista-permissoes',
  templateUrl: './list-permition.component.html',
  styleUrls: ['./list-permition.component.css']
})
export class ListPermitionComponent implements OnInit {

  listaPaciente: Permition[] = [];

  constructor(private servico: PermitionService, private toastService: ToastService, private router: Router) {

  }

  listar(){
    this.servico.listaPermition().subscribe(
      res => this.listaPaciente = res
    );
  }

  remover(permition: Permition){
    this.servico.removerPermition(permition).subscribe(
      res => {
        this.toastService.toast(res,"green");
        this.listar();
      },
      err => this.toastService.toast(err,"red")
    );
  }

  editar(permition: Permition){
    this.servico.permition = permition;
    this.router.navigate(['paciente/editar']);
  }

  ngOnInit() {
    this.listar();
  }

}
