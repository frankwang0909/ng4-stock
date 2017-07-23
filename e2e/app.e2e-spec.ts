import { StocksPage } from './app.po';

describe('stocks App', () => {
  let page: StocksPage;

  beforeEach(() => {
    page = new StocksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
