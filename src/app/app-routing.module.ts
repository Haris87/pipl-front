import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonComponent } from "./person/person.component";
import { PersonListComponent } from "./person-list/person-list.component";
import { AuthGuard } from "./guards/auth-guard.service";
import { LoginComponent } from "./login/login.component";
import { FooterOnlyLayoutComponent } from "./footer-only-layout/footer-only-layout.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "people",
        component: PersonListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "people/:id",
        component: PersonComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "login",
    component: FooterOnlyLayoutComponent,
    children: [{ path: "", component: LoginComponent }]
  },
  { path: "", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
