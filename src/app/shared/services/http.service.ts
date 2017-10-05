import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {RespondentModel} from '../../pages/models/respondent.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  url = 'http://localhost:3000/respondents';

  constructor(private http: Http) {
  }

  get(): Promise<RespondentModel[]> {
    return this.http.get(this.url).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  private extractData(res: any) {
    const body = res.json();
    return body;
  }
  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
