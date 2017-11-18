import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Test} from '../../models/test';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TestService {

    constructor(private http: HttpClient) {
    }

    createTest(test: Test): Observable<Test> {
        return this.http.post(environment.api.quiz.save, test)
            .map(quiz => new Test(quiz));
    }

    updateTest(test: Test): Observable<Test> {
        return this.http.put(`${environment.api.quiz.save}/${test.id}`, test);
    }

    getTests(): Observable<Test[]> {
        return this.http.get(environment.api.quiz.get);
    }

    getTest(id): Observable<Test> {
        return this.http.get(`${environment.api.quiz.get}/${id}`);
    }
}
