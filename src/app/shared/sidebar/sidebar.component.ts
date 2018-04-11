import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/shared.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( public _sideBar:SidebarService ) { }

  ngOnInit() {
  }

}
