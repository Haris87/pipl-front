import { AuthenticationService } from "./authentication.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class LoggedGuard implements CanActivate {
  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return Observable.create(observer => {
      this._authService.getAuthState().subscribe(user => {
        let notLogged;
        console.log("USER", user);
        if (!!user) {
          console.log("notLogged");
          this._router.navigate(["/"]);
          notLogged = false;
        } else {
          notLogged = true;
        }

        observer.next(notLogged);
        observer.complete();
      });
    });
  }
}
