import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthRespondentService } from './auth-respondent.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = this.injector.get(AuthService);
    const authRespondentsService = this.injector.get(AuthRespondentService);

    let token;
    if (req.url.includes('admin')) {
      token = authService.getToken();
    } else if (req.url.includes('respondent')) {
      token = authRespondentsService.getToken();
    } else {
      return next.handle(req);
    }

    const headers = {
      'Authorization': token || ''
    };

    const clonedRequest = req.clone({
      setHeaders: headers
    });

    return next.handle(clonedRequest);
  }
}
