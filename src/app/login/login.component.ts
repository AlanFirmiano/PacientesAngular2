import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servico:LoginService, private rota:Router) { }

  ngOnInit() {
  }

}
