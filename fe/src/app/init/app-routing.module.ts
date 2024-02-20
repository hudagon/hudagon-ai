import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" },
  { 
    path: "landing",
    loadChildren: () => import("../features/landing-page/landing-page.module").then(m => m.LandingPageModule)
  },
  {
    path: "list",
    loadChildren: () => import("../features/list-page/list-page.module").then(m => m.ListPageModule)
  },
  {
    path: "error",
    loadChildren: () => import("../features/error-page/error-page.module").then(m => m.ErrorPageModule)
  },
  { path: "**", redirectTo: "/error" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
