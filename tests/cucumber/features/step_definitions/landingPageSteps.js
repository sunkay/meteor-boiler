 (function () {

  'use strict';

  var assert = require('assert');

  module.exports = function () {

  	var helper = this;

  this.Then(/^I should see the button "([^"]*)"$/, function (buttonName, callback) {
   		// Write code here that turns the phrase above into concrete actions

   		helper.world.browser.
   			getText("#at-nav-button", function(err, res){
   				assert.equal(res[0], buttonName);
   			});
	   callback();
	});

	this.Then(/^I should see (\d+) posts$/, function (numPosts, callback) {
      helper.world.browser.
    	elements(".postItem", function(err, res){
    		assert.equal(res.value.length, numPosts);
    		console.log(res.value.length);
    	});    

      callback();
    });

  this.Given(/^I am authenticated$/, function (callback) {
    //perform login steps
    helper.world.browser.
      waitForExist('#at-nav-button').      
      waitForVisible('#at-nav-button').
     click('#at-nav-button').
      saveScreenshot(process.env.PWD + '/auth1.png').
      setValue('#at-field-email', 'sunil@y.com').
      setValue('#at-field-password', 'sunil123').
      saveScreenshot(process.env.PWD + '/auth2.png').      
      click('#at-btn').
      saveScreenshot(process.env.PWD + '/auth3.png').
      call(callback);
      
  });

  this.Then(/^I should see a "([^"]*)" button$/, function (arg1, callback) {
     // Write code here that turns the phrase above into concrete actions
     callback.pending();
  });


  };

})();