import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { patch } from "webdriver-js-extender";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuardGuard } from "../services/service.index";
import { ProfileComponent } from "./profile/profile.component";

const pagesRoutes:Routes = [
    {path:"",component:PagesComponent,
    canActivate:[LoginGuardGuard],
    children:[
        {path:"progress", component:ProgressComponent, data:{titulo:'Barras de progreso'} },
        {path:"grafica1", component:Graficas1Component, data:{titulo:'Graficas' } },
        {path:"dashboard", component:DashboardComponent, data:{titulo:'Dashboard'}},
        {path:"perfil", component:ProfileComponent, data:{titulo:'Perfil'}},        
        {path:"rxjs", component:RxjsComponent, data:{titulo:'rxjs'}},        
        {path:"",redirectTo:'/dashboard',pathMatch:'full'}
        ]
    }
];
export const pagesRouting = RouterModule.forChild(pagesRoutes);