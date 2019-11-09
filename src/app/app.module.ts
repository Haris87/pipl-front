import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthenticationService } from "./services/authentication.service";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { AppRoutingModule } from "./app-routing.module";
import { PersonComponent } from "./person/person.component";
import { PersonListComponent } from "./person-list/person-list.component";
import { PersonService } from "./services/person.service";
import { PiplService } from "./services/pipl.service";
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
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { FooterOnlyLayoutComponent } from "./footer-only-layout/footer-only-layout.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { PiplResultsComponent } from './pipl-results/pipl-results.component';
import { PiplSearchComponent } from './pipl-search/pipl-search.component';
import { PiplComponent } from './pipl/pipl.component';

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
    HeaderComponent,
    PiplResultsComponent,
    PiplSearchComponent,
    PiplComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [
    AuthenticationService,
    PersonService,
    PiplService,
    AuthGuard,
    LoggedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
