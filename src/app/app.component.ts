import {Component} from '@angular/core';
import {NavigationService} from './shared/NavigationService';

@Component({
  selector: 'pt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NavigationService]
})
export class AppComponent {
  loadedFeature = '';

  constructor(private _sharedService: NavigationService) {
  }

  OnNavigate(feature: string) {
    this.loadedFeature = feature;
    this._sharedService.insertData({
      tests: true,
      allTests: feature === 'allTests',
      activations: feature === 'activations',
      allRespondents: feature === 'allResponders',
    });
  }

}
