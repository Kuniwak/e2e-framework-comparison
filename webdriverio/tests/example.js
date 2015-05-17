'use strict';

var webdriverio = require('webdriverio');
var options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};
var client = webdriverio.remote(options);

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

chaiAsPromised.transferPromiseness = client.transferPromiseness;
var expect = chai.expect;

describe('Google', function() {
  it('should search', function() {
    var body = client
      .url('http://www.google.com')
      .waitForExist('input[name=q]', 1000)
      .setValue('input[name=q]', 'webdriverio')
      .keys('\uE007')
      .waitForExist('h3', 1000)
      .getHTML('body');

    return expect(body).to.eventually.contain('WebdriverIO');
  });

  before(function() {
    return client.init();
  });

  after(function() {
    return client.end();
  });
});
