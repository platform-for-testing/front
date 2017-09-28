import {Injectable} from '@angular/core';
import {Page} from './Page';

@Injectable()
export class NavigationService {
  currentPage = '';


  onSelectedFeature(feature: string) {
    this.currentPage = feature;
    console.log(this.currentPage);
  }
}
