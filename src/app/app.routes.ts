import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { PageNoFoundComponent } from "./shared/pagenofound/pageNofound.component";

const appRoutes:Routes =[
    
    {path:"login", component:LoginComponent},
    {path:"**", component:PageNoFoundComponent}
];
export const appRouting = RouterModule.forRoot(appRoutes, {useHash:true});