import { BoletimEscolarPage } from './app.po';

describe('boletim-escolar App', function() {
  let page: BoletimEscolarPage;

  beforeEach(() => {
    page = new BoletimEscolarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
