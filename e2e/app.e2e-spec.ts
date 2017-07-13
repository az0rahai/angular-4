import { AuthorListPage } from './app.po';

describe('author-list App', () => {
  let page: AuthorListPage;

  beforeEach(() => {
    page = new AuthorListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
