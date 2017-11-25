import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Test } from '../../models/test';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ActivationService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getActivation(id): Observable<Test> {
    return this.http.get<Test>(`${environment.api.activation.getOne}/${id}`);
  }
}
