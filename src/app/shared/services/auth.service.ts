import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../../../environments/environment';
import { HttpResponse } from 'selenium-webdriver/http';

declare const FB: any;

@Injectable()
export class AuthService {

  private isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get isLoggedInMap(): boolean {
    return !!this.getToken();
  }

  get isLoggedIn(): Observable<boolean> {
    this.isLoggedIn$.next(!!this.getToken());
    return this.isLoggedIn$.asObservable();
  }

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
          observer.next(authResponse.accessToken);
          observer.complete();

        } else {
          observer.error('Can`t login to Facebook');
        }
      });
    });
  }

  logout() {
    this.removeToken();
    this.isLoggedIn$.next(false);
  }

  onSuccessLogin(access_token: string) {
    this.http.post(environment.api.auth.facebook, { access_token })
      .subscribe((response: any) => {
        const token = response.token;

        if (token) {
          this.saveToken(token);
          this.router.navigate(['/all-tests']);

        } else {
          console.error('Server error'); // TODO: handle errors
        }
      });
  }

  saveToken(token: string) {
    localStorage.setItem('token', `Bearer ${token}`);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('logout');
  }
}
