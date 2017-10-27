import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Test} from '../../pages/models/test';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostTestService {

  constructor(private http: Http) {
  }

  private static extractData(res: any) {
    return res.json();
  }
  private static handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
  post(test: Test): Promise<Test> {
    return this.http.post(environment.api.quiz.save, test).toPromise()
      .then(PostTestService.extractData)
      .catch(PostTestService.handleErrorPromise);
  }
}
