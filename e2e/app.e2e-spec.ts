import { DoctorHealthPage } from './app.po';

describe('doctor-health App', () => {
  let page: DoctorHealthPage;

  beforeEach(() => {
    page = new DoctorHealthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
