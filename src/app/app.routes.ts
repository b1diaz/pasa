import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./shared/header/header.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { Graficas1Component } from "./pages/graficas1/graficas1.component";
import { PageNoFoundComponent } from "./shared/pagenofound/pageNofound.component";
import { PagesComponent } from "./pages/pages.component";

const appRoutes:Routes =[
    {path:"", component:PagesComponent
        ,children:[
            {path:"progress", component:ProgressComponent},
            {path:"grafica1", component:Graficas1Component},
            {path:"dashboard", component:DashboardComponent}
        ]
    },    
    
    {path:"login", component:LoginComponent},
    
    {path:"", redirectTo: '/dashboard',pathMatch:'full'},    
    {path:"**", component:PageNoFoundComponent}
];
export const appRouting = RouterModule.forRoot(appRoutes, {useHash:true});