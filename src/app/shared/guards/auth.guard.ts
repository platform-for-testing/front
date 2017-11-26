import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {  } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.protect();
  }

  canActivateChild() {
    return this.protect();
  }

  protect() {
    if (!this.authService.isLoggedInMap) {
      this.router.navigate(['/']);
    }

    return this.authService.isLoggedInMap;
  }
}
