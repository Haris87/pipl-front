import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthenticationService } from "./shared/authentication.service";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { AppRoutingModule } from "./app-routing.module";
import { PersonComponent } from "./person/person.component";
import { PersonListComponent } from "./person-list/person-list.component";
import { PersonService } from "./shared/person.service";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth-guard.service";
import { LoggedGuard } from "./guards/logged-guard.service";
import { MeComponent } from "./me/me.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { FooterOnlyLayoutComponent } from "./footer-only-layout/footer-only-layout.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PersonComponent,
    PersonListComponent,
    LoginComponent,
    MeComponent,
    MainLayoutComponent,
    FooterOnlyLayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [AuthenticationService, PersonService, AuthGuard, LoggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
