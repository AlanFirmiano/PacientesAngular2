import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import {Router} from '@angular/router';

import { Patient } from 'app/_models/patient';
import { ToastService } from 'app/toast.service';
import { PermitionService } from "../permition.service";
import {Permition} from "app/_models/permition";
import {Exercise} from "app/_models/exercise";
import {Grasp} from "../../_models/grasp";
import {Level} from "../../_models/level";

@Component({
  selector: 'app-nova-permissao',
  templateUrl: './new-permition.component.html',
  styleUrls: ['./new-permition.component.css']
})
export class NewPermitionComponent implements OnInit {
  listaPaciente: Patient[] = [];
  listaGrasp: Grasp[] = [];
  private permition: Permition;
  private aux = false;

  constructor(private servico: PermitionService, private toastService: ToastService, private router: Router) {}

  ngOnInit() {
    if(this.servico.permition != null) {
      this.permition = this.servico.permition;
      this.aux = true;
    }else {
      this.permition = new Permition();

    }

    this.listarGrasps();
    this.listarPatients();
    console.log("klhkjhk");
  }

  adicionar(){

  }

  listarPatients(){
    this.servico.listaPatients().subscribe(
      res => this.listaPaciente = res
    );
  }
  listarGrasps(){
    this.servico.listaGrasp().subscribe(
      res => {
        this.listaGrasp = res;
      }
    );
  }
  save(){
    if(!this.aux){
      this.servico.salvarPermissao(this.permition).subscribe(
        res => this.toastService.toast(res,"green"),

        err => this.toastService.toast(err,"red")
      );
    }else{
      this.servico.editarPermition(this.permition).subscribe(
        res => {
          this.toastService.toast(res,"green");
        },
        err => this.toastService.toast(err,"red")
      );
    }
  }



}
