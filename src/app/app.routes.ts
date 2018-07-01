import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { PageNoFoundComponent } from "./shared/pagenofound/pageNofound.component";
import { AplicacionComponent } from "./aplicacion/aplicacion.component";
import { RegisterComponent } from "./login/register.component";

const appRoutes:Routes =[
    
    {path:"login", component:LoginComponent},
    {path:"aplicacion",component:AplicacionComponent},
    {path:"",component:AplicacionComponent},    
    {path:"registro", component: RegisterComponent},
    {path:"**", component:PageNoFoundComponent}
];
export const appRouting = RouterModule.forRoot(appRoutes, {useHash:true});