import { Injectable } from "@angular/core";
import { PiplQuery } from "../pipl-query";
import { possible, person } from "../data/pipl-response";
import { Observable, of, Subject } from "rxjs";

const STORAGE_KEY = "_pipl_api";

@Injectable({
  providedIn: "root"
})
export class PiplService {
  constructor() {
    this.results = new Subject<any>();
  }

  results: Subject<any>;

  setApiKey(ApiKey: string) {
    localStorage.setItem(STORAGE_KEY, ApiKey);
  }

  getApiKey() {
    return localStorage.getItem(STORAGE_KEY);
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
