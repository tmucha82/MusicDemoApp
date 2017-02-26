import { MusicDemoAppPage } from './app.po';

describe('music-demo-app App', function() {
  let page: MusicDemoAppPage;

  beforeEach(() => {
    page = new MusicDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
