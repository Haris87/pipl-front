import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.css"]
})
export class AuthenticationComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService) {}

  user: any;
  email: string;
  password: string;

  signInTwitter() {
    this.authenticationService.signInTwitter();
  }

  signInGmail() {
    this.authenticationService.signInGmail();
  }

  signOut() {
    this.authenticationService.signOut();
  }

  ngOnInit() {
    this.authenticationService.userData.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() {}
}
