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
        waitForExist("#newPost").
        waitForVisible("#newPost").
        setValue("[name='title']", 'Title Test').
        setValue("[name='url']", 'http://testurl.com').
        submitForm('#newPost').
        pause(100);

      callback();
    });

    this.Then(/^I should delete the new post$/, function (callback) {
      console.log("Then: I should delete the new post");
      helper.world.browser.
        waitForExist(".deletePost").
        waitForVisible(".deletePost").
        click('.deletePost').
        pause(100);

      callback();
    });

   this.When(/^I click on edit post$/, function (callback) {
      console.log("When: I click on edit post");
      helper.world.browser.
        waitForExist(".editPost").
        waitForVisible(".editPost").
        click('.editPost').
        pause(100);

      callback();
   });

   this.When(/^I edit a post$/, function (callback) {
      console.log("When: I edit a  post");
      helper.world.browser.
        waitForExist("#editPost").
        waitForVisible("#editPost").
        setValue("[name='title']", 'EDITED').
        setValue("[name='url']", 'http://testurl.com').
        submitForm('#editPost').
        pause(100);

      callback();
   });
  
   this.Then(/^I should see edited post$/, function (callback) {
      console.log("Then: I should see edited post");

      helper.world.browser.
        waitForExist(".postItem").
        waitForVisible(".postItem").
        getText(".postItem", function(err, res){
          //console.log(res);
          assert.equal(res[0], "EDITED");
        }).
        pause(100);

      callback();
   });


  };
})();