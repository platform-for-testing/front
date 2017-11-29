import { Component, OnInit } from '@angular/core';

import { AuthRespondentService } from '../../shared/services/auth-respondent.service';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'pt-login-page',
  templateUrl: './login-page-respondent.component.html',
  styleUrls: ['./login-page-respondent.component.scss']
})
export class LoginPageRespondentComponent implements OnInit {

  constructor(private authRespondentService: AuthRespondentService, private authService: AuthService) { }

  ngOnInit() {
  }

  facebookLogin() {
    this.authService.facebookLogin()
      .subscribe(token => this.authRespondentService.onSuccessLogin(token));
  }

}
