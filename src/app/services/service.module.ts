import { NgModule } from '@angular/core';
import { SharedService, SidebarService } from './shared.index';

@NgModule({
  imports: [
  ],
  declarations: [],
  providers:[
    SharedService,
    SidebarService
  ]
})
export class ServiceModule { }
