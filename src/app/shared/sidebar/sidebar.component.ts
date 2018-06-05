import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';

declare function ocultarSidebar();
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( public _sideBar:SidebarService ) { }

  ngOnInit() {
    ocultarSidebar();
  }

}
