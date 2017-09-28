import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return browser.getTitle();
    // return element(by.css('title')).getText();
  }
}
