import { Component, OnInit } from "@angular/core";
import { PiplService } from "../pipl.service";
import { PiplQuery } from "../pipl-query";

@Component({
  selector: "app-pipl-search",
  templateUrl: "./pipl-search.component.html",
  styleUrls: ["./pipl-search.component.scss"]
})
export class PiplSearchComponent implements OnInit {
  constructor(private piplService: PiplService) {}

  query: PiplQuery;
  resultType = false;
  showAdvanced = false;

  ngOnInit() {
    this.query = new PiplQuery();
  }

  search() {
    this.resultType = !this.resultType;
    this.piplService.search(this.query, this.resultType);
  }

  clear() {
    this.query = new PiplQuery();
  }
}
