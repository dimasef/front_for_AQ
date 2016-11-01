import { FrontBackPage } from './app.po';

describe('front-back App', function() {
  let page: FrontBackPage;

  beforeEach(() => {
    page = new FrontBackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
