import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.css"]
})
export class AuthenticationComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService) {}

  user: any;

  ngOnInit() {}
}
