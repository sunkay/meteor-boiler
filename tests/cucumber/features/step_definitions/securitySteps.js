 (function () {

  'use strict';

  var assert = require('assert');


  module.exports = function () {

  	var helper = this;
    //var rootUrl = helper.world.cucumber.mirror.rootUrl;
    //


    this.Given(/^I am logged out$/, function (callback) {
      log.info("Given: I am logged out ");
      //always signout before sigingin in
      helper.world.browser.
      url(helper.world.cucumber.mirror.rootUrl).
      waitForExist('#at-nav-button').
      waitForVisible('#at-nav-button').
      click('#at-nav-button').
      pause(200);

      callback();
    });

    this.Given(/^I am logged in$/, function (callback) {
      log.info("Given: I am logged in ");

      //always signout before sigingin in
      helper.world.browser.
      url(helper.world.cucumber.mirror.rootUrl).
      waitForExist('#at-nav-button').
      waitForVisible('#at-nav-button').
      click('#at-nav-button').
      pause(300);

/*
      helper.world.browser.addCommand('authenticateUser', function (email, password) {
        this.execute(function (eml, pwd, done) {
          Meteor.loginWithPassword(eml, pwd, done);
        }, email, password, callback);
      }, callback);

      helper.world.browser.
        authenticateUser('sunny@y.com', 'sunny123').
        pause(100);
*/

      // make sure the user is Authenticated
      helper.world.browser.
      url(helper.world.cucumber.mirror.rootUrl+"sign-in").
      waitForExist('.at-pwd-form').
      waitForVisible('.at-pwd-form').
      setValue('#at-field-email', 'sunny@y.com').
      setValue('#at-field-password', 'sunny123').
      click('#at-btn').
      pause(250);

      callback();
    });



 this.Then(/^I should see a "([^"]*)" form$/, 
  function (title, callback) {
    log.info("Then: I should see sign in form ");

    helper.world.browser.
    waitForExist('.at-title').      
    waitForVisible('.at-title').
    getText(".at-title h3", function(err, res){
      assert.equal(res, title);
    });
    callback();

  });

};
})();



