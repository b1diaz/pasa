import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNoFoundComponent } from './pagenofound/pageNofound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    PageNoFoundComponent
  ],
  exports:[
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
