import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(public _usuarioServices:UsuarioService, public router:Router){
    
  }
  canActivate(){
    console.log('paso por guard login');
  if(this._usuarioServices.estaLogueado()){
    console.log('true');
    return true;
  }else{
    this.router.navigate(['/aplicacion']);
    console.log('Bloqueado por el Login Guard');
    return false;
  }
  
  }
}
