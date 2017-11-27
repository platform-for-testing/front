import { Component, OnInit } from '@angular/core';

import { AuthRespondentService } from '../../shared/services/auth-respondent.service';

@Component({
  selector: 'pt-login-page',
  templateUrl: './login-page-respondent.component.html',
  styleUrls: ['./login-page-respondent.component.scss']
})
export class LoginPageRespondentComponent implements OnInit {

  constructor(private authRespondentService: AuthRespondentService) { }

  ngOnInit() {
  }

  facebookLogin() {
    this.authRespondentService.facebookLogin()
      .subscribe(token => this.authRespondentService.onSuccessLogin(token));
  }

}
