import { AppPage } from './app.po';

describe('platform-for-testing App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should show correct title', () => {
    page.navigateTo();
      expect(page.getTitleText()).toEqual('PlatformForTesting');
  });
});
