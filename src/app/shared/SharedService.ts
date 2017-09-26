import {Injectable} from '@angular/core';
import {Page} from './Page';

@Injectable()
export class SharedService {
  pageObject: Page = {
    tests: false,
    allTests: false,
    activations: false,
    allRespondents: false,
  };

  insertData(object: Page) {
    this.pageObject = object;
  }
}
