 (function () {

  'use strict';

  var assert = require('assert');


  module.exports = function () {

  	var helper = this;
    //var rootUrl = helper.world.cucumber.mirror.rootUrl;


	this.Given(/^I am logged out$/, function (callback) {
      console.log("Given: I am logged out ");

      // dummy since we are already logged out

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
      console.log(".....");
	  callback();

	});

  };
})();



