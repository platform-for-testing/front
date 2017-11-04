import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'pt-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  facebookLogin() {
    this.authService.facebookLogin()
      .subscribe(token => {
        console.log(token);
        this.authService.onSuccessLogin(token);
      });
  }

}
