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

  };

})();