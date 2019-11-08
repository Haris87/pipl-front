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
    return this._authService.isAuthenticated().subscribe(authenticated => {
      console.log('is auth', authenticated);
      if (!authenticated) {
        this._router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    });
  }
}
