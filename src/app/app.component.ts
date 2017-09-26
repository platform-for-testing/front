import {Component} from '@angular/core';

@Component({
  selector: 'pt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature = 'allTests';

  OnNavigate(feature: string) {
    this.loadedFeature = feature;

  }

}
