import {Component} from '@angular/core';
import {SharedService} from './shared/SharedService';

@Component({
  selector: 'pt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SharedService]
})
export class AppComponent {
  loadedFeature = '';

  constructor(private _sharedService: SharedService) {
  }

  OnNavigate(feature: string) {
    this.loadedFeature = feature;
    this._sharedService.insertData({
      tests: true,
      allTests: true,
      activations: false,
      allRespondents: false,
    });
  }

}
