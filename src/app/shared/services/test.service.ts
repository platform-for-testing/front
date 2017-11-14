import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Test} from '../../pages/models/test';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class TestService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  createTest(test: Test): Observable<Test> {
    return this.http.post(environment.api.quiz.save, test)
      .map(quiz => new Test(quiz));
  }

  updateTest(test: Test): Observable<Test> {
    return this.http.put<Test>(`${environment.api.quiz.save}/${test.id}`, test);
  }

  getTest(): Observable<Test[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<Test[]>(environment.api.quiz.get, { headers });
  }
}
