import { Injectable } from "@angular/core";
import { PiplQuery } from "./pipl-query";
import { possible, person } from "../data/pipl-response";
import { Observable, of, Subject } from "rxjs";
import { take } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";

const STORAGE_KEY = "_pipl_api";
const PIPL_URL: string = "https://api.pipl.com/search/";

@Injectable({
  providedIn: "root"
})
export class PiplService {
  constructor(private httpClient: HttpClient) {
    this.results = new Subject<any>();
    this.setApiKey("g6bgwkzuk56lda74b02f0umg");
  }

  results: Subject<any>;
  results$: Observable<any>;

  setApiKey(ApiKey: string) {
    localStorage.setItem(STORAGE_KEY, ApiKey);
  }

  getApiKey() {
    return localStorage.getItem(STORAGE_KEY);
  }

  getResults(): Observable<any> {
    return this.results$;
  }

  search(query: PiplQuery) {
    const params = this.constructParams(query);
    console.log(params.toString());
    this.results$ = this.httpClient.get<any>(PIPL_URL, {
      params
    });

    this.results$.pipe(take(1)).subscribe(
      response => console.log("response", response),
      error => console.log("ERROR", error)
    );
    return this.results$;
  }

  constructParams(query: PiplQuery) {
    let params = new HttpParams().set("key", this.getApiKey());

    return Object.getOwnPropertyNames(query).reduce((_params, prop) => {
      const _param = query[prop];
      return _param ? _params.set(prop, _param) : _params;
    }, params);
  }
}
