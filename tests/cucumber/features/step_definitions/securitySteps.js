 (function () {

  'use strict';

  var assert = require('assert');


  module.exports = function () {

  	var helper = this;
    //var rootUrl = helper.world.cucumber.mirror.rootUrl;


    this.Given(/^I am logged out$/, function (callback) {
      console.log("Given: I am logged out ");
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
      console.log("Given: I am logged in ");

      //always signout before sigingin in
      helper.world.browser.
      url(helper.world.cucumber.mirror.rootUrl).
      waitForExist('#at-nav-button').
      waitForVisible('#at-nav-button').
      click('#at-nav-button').
      pause(100);


      // make sure the user is Authenticated
      helper.world.browser.
      url(helper.world.cucumber.mirror.rootUrl+"sign-in").
      waitForExist('.at-pwd-form').
      waitForVisible('.at-pwd-form').
      setValue('#at-field-email', 'sunny@y.com').
      setValue('#at-field-password', 'sunny123').
      click('#at-btn').
      pause(100);
      
      callback();
    });



    this.Then(/^I should see a "([^"]*)" form$/, 
      function (title, callback) {
        console.log("Then: I should see sign in form ");

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



