import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication/authentication.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-me",
  templateUrl: "./me.component.html",
  styleUrls: ["./me.component.scss"]
})
export class MeComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  user$: Observable<any>;

  ngOnInit() {
    this.user$ = this.authenticationService.getAuthState();
  }
}
