import { Injectable } from "@angular/core";
import { PiplQuery } from "../pipl-query";
import { possible, person } from "../data/pipl-response";
import { Observable, of, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PiplService {
  constructor() {
    this.results = new Subject<any>();
  }

  results: Subject<any>;

  setApiKey(ApiKey: string) {
    localStorage.setItem("pipl_api", ApiKey);
  }

  getApiKey() {
    return localStorage.getItem("pipl_api");
  }

  getResults(): Observable<any> {
    return this.results.asObservable();
  }

  search(query: PiplQuery, found: boolean) {
    console.log("results person", person);
    // TODO call api
    if (found) {
      this.results.next(person);
    } else {
      this.results.next(possible);
    }

    return this.results;
  }
}
