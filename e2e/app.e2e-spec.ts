import { AppPage } from './app.po';

describe('platform-for-testing App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('header works! It is a temporary mock.');
  });
});
