import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsersService]
})
export class RegisterComponent implements OnInit {

  username = "";
  password = "";

  constructor(
    private servicioUsuario: UsersService
  ) { }

  ngOnInit() {
  }

  mostrar() {
    this.servicioUsuario.register(this.username,this.password);
  }
}
