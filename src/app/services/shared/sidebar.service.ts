import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu:any = [
    {
      titulo: 'Principal',
      icono: 'fas fa-user-circle',
      subMenu: [
        { titulo:'Dashboard', Url:'/dashboard'},
        { titulo:'ProgressBar', Url:'/progress'},
        { titulo:'Graficas', Url:'/grafica1'},
        { titulo:'rxjs', Url:'/rxjs'},        
        { titulo:'Login', Url:'/login'},
        
        
      ]
    }
  ];
  constructor() { }

}
