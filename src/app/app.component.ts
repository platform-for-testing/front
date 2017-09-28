import {Component} from '@angular/core';
import {NavigationService} from './shared/NavigationService';

@Component({
  selector: 'pt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NavigationService]
})
export class AppComponent {

  constructor(public _sharedService: NavigationService) {
  }

}
