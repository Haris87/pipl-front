import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./authentication/auth-guard.service";
import { LoginComponent } from "./authentication/login/login.component";
import { FooterOnlyLayoutComponent } from "./footer-only-layout/footer-only-layout.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { LoggedGuard } from "./authentication/logged-guard.service";
import { PiplComponent } from "./pipl/pipl/pipl.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

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
  {
    path: "privacy-policy",
    component: FooterOnlyLayoutComponent,
    children: [{ path: "", component: PrivacyPolicyComponent }]
  },
  { path: "", redirectTo: "pipl", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
