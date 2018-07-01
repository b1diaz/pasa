import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { pagesRouting } from './pages.router';
import {FormsModule} from '@angular/forms';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    pagesRouting,
    FormsModule,
    ChartsModule,
    PipesModule,
    CommonModule
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    RxjsComponent,
    ProfileComponent
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ]
})
export class PagesModule {
  
 }
