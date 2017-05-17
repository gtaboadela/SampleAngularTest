import { SampleAngularCliPage } from './app.po';

describe('sample-angular-cli App', () => {
  let page: SampleAngularCliPage;

  beforeEach(() => {
    page = new SampleAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
