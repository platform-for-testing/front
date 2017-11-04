import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
// import 'rxjs/observable/create';

import { environment } from '../../../environments/environment';

declare const FB: any;

@Injectable()
export class AuthService {

  constructor(private router: Router) {
    FB.init({
      appId: environment.facebookAppId,
      status: false,
      cookie: false,
      xfbml: false,
      version: 'v2.10'
    });
  }

  facebookLogin() {
    return Observable.create((observer) => {
      FB.login(response => {
        const { authResponse } = response;

        if (authResponse) {
          const token = this.changeToken(authResponse.accessToken);
          observer.next(token);
          observer.complete();

        } else {
          observer.error('Can`t login to Facebook');
        }
      });
    });
  }

  changeToken(token: string) {
    // go to our back-end here
    return token;
  }

  onSuccessLogin(token: string) {
    this.router.navigate(['all-tests']);
  }

}
