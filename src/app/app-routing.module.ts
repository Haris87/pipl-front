import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth-guard.service";
import { LoginComponent } from "./login/login.component";
import { FooterOnlyLayoutComponent } from "./footer-only-layout/footer-only-layout.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { LoggedGuard } from "./guards/logged-guard.service";
import { PiplComponent } from "./pipl/pipl/pipl.component";

const routes: Routes = [
  {
    path: "pipl",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: PiplComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: FooterOnlyLayoutComponent,
    children: [{ path: "", component: LoginComponent }],
    canActivate: [LoggedGuard]
  },
  { path: "", redirectTo: "pipl", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
