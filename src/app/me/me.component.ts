import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-me",
  templateUrl: "./me.component.html",
  styleUrls: ["./me.component.css"]
})
export class MeComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  user$: Observable<any>;

  ngOnInit() {
    this.user$ = this.authenticationService.getAuthState();
  }
}
