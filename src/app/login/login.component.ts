import { Component, OnInit, group } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';
import { Router } from '@angular/router';
import { element } from 'protractor';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  email: string;
  recuerdame: boolean;
  
  constructor( public _usuarioService:UsuarioService, public router:Router  ){}

  ngOnInit(){
    
    if(localStorage.getItem('emailRegistrado')){
      this.email = localStorage.getItem('emailRegistrado');
      localStorage.removeItem('emailRegistrado');
    }else{
      this.email = localStorage.getItem('email') || "";
    }

    

    if(this.email.length > 1){
      this.recuerdame = true;
    }else{
      this.recuerdame = false;
    }
  }

 

  ingresar(formLogin:NgForm){

    if(formLogin.invalid){
      return;
    }
  
    let usuario = new Usuario(null, formLogin.value.email, formLogin.value.password );
    
    return this._usuarioService.login(usuario, this.recuerdame)
                          .subscribe( correcto => this.router.navigate(['/dashboard']));
  }

  


}

