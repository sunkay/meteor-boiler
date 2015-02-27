 (function () {

  'use strict';

  var assert = require('assert');


  module.exports = function () {

  	var helper = this;
    //var rootUrl = helper.world.cucumber.mirror.rootUrl;

    this.Given(/^I am on the home page$/, function (callback) {
      console.log("Given: I am on homepage ");

      helper.world.browser.
        url(helper.world.cucumber.mirror.rootUrl).
        call(callback);
    });

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
      console.log("When: I navigate to "+relativePath);

      helper.world.browser.
        url(helper.world.cucumber.mirror.rootUrl + relativePath).
        call(callback);
    });

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

    this.Then(/^I should see the title of "([^"]*)"$/, function (expectedTitle, callback) {
      console.log("Then: see title  "+expectedTitle);

      helper.world.browser.
        title(function (err, res) {
          assert.equal(res.value, expectedTitle);
          callback();
        });
    });

    this.When(/^I submit a new post$/, function (callback) {
      console.log("When: I submit a new post");
      helper.world.browser.
        pause(500).
        saveScreenshot(process.env.PWD + '/newPost.png').
        waitForExist("#newPost").
        waitForVisible("#newPost").
        setValue("[name='title']", 'Title Test').
        setValue("[name='url']", 'http://testurl.com').
        saveScreenshot(process.env.PWD + '/newPost.png').
        submitForm('#newPost').
        pause(200);

      callback();
    });

/*
    this.Given(/^I am registered$/, function (callback) {
      console.log("Given: I am registered ");

      helper.world.browser.
        url(helper.world.cucumber.mirror.rootUrl+"sign-up").
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
*/
  };
})();