import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { patch } from "webdriver-js-extender";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const pagesRoutes:Routes = [
    {path:"",component:PagesComponent,
    children:[
        {path:"progress", component:ProgressComponent},
        {path:"grafica1", component:Graficas1Component},
        {path:"dashboard", component:DashboardComponent},
        {path:"",redirectTo:'/dashboard',pathMatch:'full'}
        ]
    }
];
export const pagesRouting = RouterModule.forChild(pagesRoutes);