import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import 'rxjs/observable/create';

import { environment } from '../../../environments/environment';
import { HttpResponse } from 'selenium-webdriver/http';

declare const FB: any;

@Injectable()
export class AuthService {

  constructor(private router: Router, private http: HttpClient) {
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

  onSuccessLogin(access_token: string) {
    this.http.post(environment.api.auth.facebook, { access_token })
      .subscribe((response: any) => {
        // const token = response.headers.get('x-auth-token');
        const token = response.token;
        this.saveToken(token);
        this.router.navigate(['/all-tests']);
        console.log('JWT', token, 'JWT');
      });
    // this.router.navigate(['all-tests']);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
