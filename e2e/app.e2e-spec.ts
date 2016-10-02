import { AngucliPage } from './app.po';

describe('angucli App', function() {
  let page: AngucliPage;

  beforeEach(() => {
    page = new AngucliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
