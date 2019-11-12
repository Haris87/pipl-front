import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthenticationService } from "./authentication.service";
import { LoginComponent } from "./login/login.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { LoggedGuard } from "./logged-guard.service";
import { AuthGuard } from "./auth-guard.service";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatCardModule } from "@angular/material";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [LoginComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthenticationService, LoggedGuard, AuthGuard]
})
export class AuthenticationModule {}
