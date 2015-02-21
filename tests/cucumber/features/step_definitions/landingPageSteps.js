 (function () {

  'use strict';

  var assert = require('assert');

  module.exports = function () {

  	var helper = this;
    //var rootUrl = helper.world.cucumber.mirror.rootUrl;

  this.Then(/^I should see the button "([^"]*)"$/, 
    function (buttonName, callback) {
      console.log("Then: I should see button "+buttonName);
   		helper.world.browser.
   			getText("#at-nav-button", function(err, res){
   				assert.equal(res[0], buttonName);
   			});
	   callback();
	});

	this.Then(/^I should see (\d+) posts$/, 
    function (numPosts, callback) {
      console.log("Then: I should see posts "+numPosts);
      helper.world.browser.
    	elements(".postItem", function(err, res){
    		assert.equal(res.value.length, numPosts);
    		console.log(res.value.length);
    	});    

      callback();
    });

   this.Given(/^I am registered$/, function (callback) {
      console.log("Given: I am registered ");

      helper.world.browser.
        url(helper.world.cucumber.mirror.rootUrl+"SignUp").
        waitForExist('#at-signUp').      
        waitForVisible('#at-signUp').
        setValue('#at-field-email', 'sunil@y.com').
        setValue('#at-field-password', 'sunil123').
        setValue('#at-field-password_again', 'sunil123').
        click('#at-btn').
        waitForExist('#at-nav-button',1000).      
        saveScreenshot(process.env.PWD + '/register1.png');
        callback();
   }); 

  this.Given(/^I am authenticated$/, function (callback) {
    console.log("Given: I am authenticated ");

    //perform login steps 
    helper.world.browser.
      url(helper.world.cucumber.mirror.rootUrl+"SignIn").
      saveScreenshot(process.env.PWD + '/auth1.png').
      setValue('#at-field-email', 'sunil@y.com').
      setValue('#at-field-password', 'sunil123').
      saveScreenshot(process.env.PWD + '/auth2.png').      
      click('#at-btn').
      saveScreenshot(process.env.PWD + '/auth3.png');

      callback();
      
  });

 this.Given(/^I am not authenticated$/, function (callback) {
    console.log("Given: i am not authenticated ");

    callback.pending();
 });

this.Then(/^I should see a "([^"]*)" button$/, function (arg1, callback) {
    console.log("Then: i should see button "+arg1);

     // Write code here that turns the phrase above into concrete actions
     callback.pending();
  });


  };

})();