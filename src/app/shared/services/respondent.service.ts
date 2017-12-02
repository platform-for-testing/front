import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {RespondentModel} from '../../models/respondent.model';

@Injectable()
export class RespondentService {
  private _activationId: string;

  constructor(private http: HttpClient) {
  }

  getRespondents(): Observable<RespondentModel[]> {
    return this.http.get<RespondentModel[]>(environment.api.respondents.get);
  }

  get activationId(): string {
    return this._activationId;
  }

  set activationId(value: string) {
    this._activationId = value;
  }
}
