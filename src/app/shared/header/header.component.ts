import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.models';


declare function init_plugins();
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;


  constructor( public _usuarioServices:UsuarioService) { }

  ngOnInit() {
    this.usuario = this._usuarioServices.usuario;
    init_plugins();
    
  }

}
