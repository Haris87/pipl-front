import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AuthGuard } from "./authentication/auth-guard.service";
import { LoggedGuard } from "./authentication/logged-guard.service";
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
import { PiplModule } from "./pipl/pipl.module";
import { AuthenticationModule } from "./authentication/authentication.module";

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    MainLayoutComponent,
    FooterOnlyLayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatMenuModule,
    PiplModule,
    AuthenticationModule
  ],
  providers: [AuthGuard, LoggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
