import { Ouifa2Page } from './app.po';

describe('ouifa2 App', () => {
  let page: Ouifa2Page;

  beforeEach(() => {
    page = new Ouifa2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
