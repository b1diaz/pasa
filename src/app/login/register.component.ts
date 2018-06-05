import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls : ['./login.component.css']
})
export class RegisterComponent implements OnInit {
  
  formRegistro:FormGroup;
  
  constructor( public router:Router, public _usuarioService:UsuarioService) { }

  sonIguales(campo1, campo2){
    return (group: FormGroup) =>{
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if(pass1 === pass2){
        return null;
      }
      return {sonIguales: true}
    }
  }

  ngOnInit() {
    this.formRegistro = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email] ),
      password: new FormControl(null,[Validators.required] ),
      password2: new FormControl(null, [Validators.required] ),
      condiciones: new FormControl(false)
    },{validators:this.sonIguales('password', 'password2')});
  
    this.formRegistro.setValue({
      nombre:null,
      email: '@unisangil.edu.co',
      password: null,
      password2: null,
      condiciones: false
    });
  }  
  registrarUsuario(){

    if (this.formRegistro.invalid){
      return;
    }
    if(!this.formRegistro.value.condiciones){
      swal("Importante", "Debe aceptar las condiciones", "warning");
      return;
    }

    let usuario = new Usuario(
      this.formRegistro.value.nombre,
      this.formRegistro.value.email,
      this.formRegistro.value.password,

    );
    
    this._usuarioService.crearUsuario(usuario).subscribe( res => this.router.navigate(['/login']));
  }
}
