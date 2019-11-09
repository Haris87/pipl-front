import { Component, OnInit } from "@angular/core";
import { PiplService } from "../services/pipl.service";

@Component({
  selector: "app-pipl-results",
  templateUrl: "./pipl-results.component.html",
  styleUrls: ["./pipl-results.component.css"]
})
export class PiplResultsComponent implements OnInit {
  constructor(private piplService: PiplService) {}

  results: any;

  ngOnInit() {
    this.piplService.getResults().subscribe(_results => {
      console.log("results changed", _results);
      this.results = _results;
    });
  }
}
