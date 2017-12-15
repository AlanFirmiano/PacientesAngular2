import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Exercise} from 'app/_models/exercise';
import { ToastService } from 'app/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-atividade',
  templateUrl: './list-exercise.component.html',
  styleUrls: ['./list-exercise.component.css']
})
export class ListExerciseComponent implements OnInit {
  listExercise: Exercise[] = [];
  fullImagePath: string;
  constructor(private servico : ExerciseService, private router: Router, private toastService: ToastService) {
    this.listar();
    this.fullImagePath = '/assets/images/teste.png';
  }

  listar() {
    this.servico.listaAtividade().subscribe(
      res => this.listExercise = res
    );
  }
  remover(atividade: Exercise){
    this.servico.removerAtividade(atividade).subscribe(
      res => {
        this.toastService.toast(res,"green");
        this.listar();
      },
      err => this.toastService.toast(err,"red")
  );

  }

  editar(atividade: Exercise){
    this.servico.atividade = atividade;
    this.router.navigate(['atividade/editar']);
  }
  ngOnInit() {
  }

}
