import { RetsAdminPage } from './app.po';

describe('rets-admin App', function() {
  let page: RetsAdminPage;

  beforeEach(() => {
    page = new RetsAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
