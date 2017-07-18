import { Component, OnInit } from '@angular/core';
import { PacienteService } from './paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  constructor(private servico:PacienteService, private rota:Router) {}
  
  ngOnInit() {
  }

}
