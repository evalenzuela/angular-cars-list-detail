import { AngularCarsListDetailPage } from './app.po';

describe('angular-cars-list-detail App', () => {
  let page: AngularCarsListDetailPage;

  beforeEach(() => {
    page = new AngularCarsListDetailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
