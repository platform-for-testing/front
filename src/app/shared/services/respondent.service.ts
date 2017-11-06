import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RespondentService {

  constructor(private http: HttpClient) {
  }

  getRespondent(): Observable<any> {
    return this.http.get(environment.api.respondents.get);
  }
}
