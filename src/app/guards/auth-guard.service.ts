import { AuthenticationService } from '../shared/authentication.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return Observable.create(observer => {
      this._authService.userData.subscribe(user => {
        let authenticated;
        console.log('USER', user);
        if (user == null) {
          // this part always fires
          console.log('no auth!');
          this._router.navigate(['/login']);
          authenticated = false;
        } else {
          console.log('authenticated');
          authenticated = true;
        }

        observer.next(authenticated);
        observer.complete();
      });
    });
  }
}
