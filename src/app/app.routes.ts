import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"signi-in",
        loadComponent:()=> import("../pages/Auth/signin/signin.component").then(e => e.SigninComponent),  
    },
    {
        path:"",
        loadComponent:()=>import("../pages/components/layout/layout.component").then(e => e.LayoutComponent),
    },
];
