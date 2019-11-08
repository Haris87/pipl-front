import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService) {}

  email: string;
  password: string;

  signUpEmail() {
    this.authenticationService.SignUpEmail(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signInEmail() {
    this.authenticationService.SignInEmail(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signInGmail() {
    this.authenticationService.SignInGmail();
  }

  signOut() {
    this.authenticationService.SignOut();
  }
  ngOnInit() {}
}
