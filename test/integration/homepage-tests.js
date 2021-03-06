/* global browser */
const assert = require('assert');
const HomePage = require('./pages/desktop/home_page');

describe('SandSend homepage', function() {
  this.retries(2);
  const homePage = new HomePage();
  const baseUrl = browser.options['baseUrl'];
  const footerLinks = ['mozilla', 'legal', 'legal', 'cookies', 'github'];

  beforeEach(function() {
    homePage.open();
    if (process.env.ANDROID) {
      this.skip();
    }
  });

  it('should have the right title', function() {
    assert.equal(browser.getTitle(), 'SandSend');
  });

  footerLinks.forEach((link, i) => {
    it(`should navigate to the correct page: ${link}`, function() {
      // Click links on bottom of page
      const els = browser.elements(homePage.footerLinks);
      browser.elementIdClick(els.value[i].ELEMENT);
      // Wait for page to load
      browser.waitUntil(() => {
        const url = browser.getUrl();
        return url !== baseUrl;
      });
      assert.ok(browser.getUrl().includes(link));
    });
  });
});
