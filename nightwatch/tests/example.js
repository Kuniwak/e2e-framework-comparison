'use strict';
module.exports = {
  'Demo test Google': function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .keys('\uE007')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
