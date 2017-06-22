import { PacientesPage } from './app.po';

describe('pacientes App', () => {
  let page: PacientesPage;

  beforeEach(() => {
    page = new PacientesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
