'use strict';

var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;


test.describe('Google Search', function() {
  test.it('should work', function() {
    var driver = this.test.driver = new webdriver.Builder()
       .withCapabilities(webdriver.Capabilities.chrome())
       .build();

    driver.get('http://www.google.com');

    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('webdriver\u000E');

    var titles = webdriver.By.tagName('h3');
    driver.wait(webdriver.until.elementLocated(titles), 10000);

    var body = driver.findElement(webdriver.By.tagName('body'));

    return expect(body.getInnerHtml())
      .to.eventually.contain('Selenium');
  });


  test.afterEach(function() {
    return this.currentTest.driver.quit();
  });
});

