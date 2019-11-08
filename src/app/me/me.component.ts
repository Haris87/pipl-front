import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../shared/authentication.service";

@Component({
  selector: "app-me",
  templateUrl: "./me.component.html",
  styleUrls: ["./me.component.css"]
})
export class MeComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  user: any = {};

  ngOnInit() {
    this.authenticationService.userData.subscribe(user => {
      this.user = user;
    });
  }
}
