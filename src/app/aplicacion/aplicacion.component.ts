import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../services/usuario/usuario.service';
import { Router } from '@angular/router';
declare const gapi:any;
@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.css']
})
export class AplicacionComponent implements OnInit {
  
  auth2:any;

  constructor(public _usuarioService:UsuarioService, public router:Router) { 
    
  }

  ngOnInit() {
    this.googleInit();
  }
  
  googleInit(){
    gapi.load('auth2', ()=>{
      this.auth2 = gapi.auth2.init({
        client_id: '322871767292-je116teb29f96ho20ilomr8cq250dju2.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin(document.getElementById('google'));
    } );
  }
  
  attachSignin( element){
    this.auth2.attachClickHandler( element, {}, googleUser=>{
      //let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      this._usuarioService.loginGoogle(token)
                          .subscribe( res => window.location.href ='#/dashboard' );
    } );
  }
}
