import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthenticationService } from './shared/authentication.service';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonService } from './shared/person.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PersonComponent,
    PersonListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [AuthenticationService, PersonService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
