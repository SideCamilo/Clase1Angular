import { Component, OnInit } from '@angular/core';
import { bootstrap } from 'bootstrap';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Ingrese su usuario";
  password = "Ingrese su password";

  constructor() { }

  ngOnInit() {
  }

  FuncionLogin(){
  }
}