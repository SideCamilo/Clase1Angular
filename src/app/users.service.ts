import { Injectable } from '@angular/core';
import { user } from './user';
import Swal from 'sweetalert2';

@Injectable()
export class UsersService {

  arrayuser = [];
  
  register(username,password){
    if(username == "" || password == ""){
      Swal(
        'Meeeeeeeeeeeeeeeeeeeeee!',
        'si se armo!',
        'success'
      )
    }else{
      var nuevousuario: user = {
        nombre_usuario: username,
        password: password
      }
      this.arrayuser.push(nuevousuario);
      for(let i = 0; i < this.arrayuser.length; i++){
        console.log("Nombre de usuario " +i +": " +this.arrayuser[i].nombre_usuario)
      } 
    }
  }
  constructor() { }
}
