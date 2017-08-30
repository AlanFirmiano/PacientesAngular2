import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as c3 from 'c3';
@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})

export class BarraComponent implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {
    let chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['Tempo Medio', 20, 23, 33, 40, 27, 25],
          ['Tempo do Paciente', 30, 26, 40, 20, 15, 50]
        ],
        type: 'bar'
      },
      bar: {
        width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
      }
    });

    let chart2 = c3.generate({
      bindto: '#chart2',
      data: {
        columns: [
          ['Tempo Medio', 20, 23, 33, 40, 27, 25],
          ['Tempo do Paciente', 30, 26, 40, 20, 15, 50]
        ],
        type: 'donut'
      }
    });
  }

}
