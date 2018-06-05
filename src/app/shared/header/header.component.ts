import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';


declare function init_plugins();
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor( public _usuarioServices:UsuarioService) { }

  ngOnInit() {
    init_plugins();
  }

}
