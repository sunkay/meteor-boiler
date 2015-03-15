 (function () {

  'use strict';

  var assert = require('assert');


  module.exports = function () {

  	var helper = this;
    //var rootUrl = helper.world.cucumber.mirror.rootUrl;

    this.Given(/^I am on the home page$/, function (callback) {
      log.info("Given: I am on homepage ");

      helper.world.browser.
      url(helper.world.cucumber.mirror.rootUrl).
      call(callback);
    });

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
      log.info("When: I navigate to "+relativePath);

      helper.world.browser.
      url(helper.world.cucumber.mirror.rootUrl + relativePath).
      call(callback);
    });

    this.Then(/^I should see the button "([^"]*)"$/, 
      function (buttonName, callback) {
        log.info("Then: I should see button "+buttonName);
        helper.world.browser.
        getText("#at-nav-button", function(err, res){
         assert.equal(res[0], buttonName);
       });
        callback();
      });

    this.Then(/^I should see (\d+) posts$/, 
      function (numPosts, callback) {
        log.info("Then: I should see posts "+numPosts);
        helper.world.browser.
        pause(250).
        elements(".postItem", function(err, res){
          assert.equal(res.value.length, numPosts);
          log.info(res.value.length);
        });    

        callback();
      });

    this.Then(/^I should see the title of "([^"]*)"$/, function (expectedTitle, callback) {
      log.info("Then: see title  "+expectedTitle);

      helper.world.browser.
      title(function (err, res) {
        assert.equal(res.value, expectedTitle);
        callback();
      });
    });

    this.When(/^I submit a new post$/, function (callback) {
      log.info("When: I submit a new post");
      helper.world.browser.
        pause(250).
        waitForExist("#newPost").
        waitForVisible("#newPost").
        setValue("[name='title']", 'Title Test').
        setValue("[name='url']", 'http://testurl.com').
        submitForm('#newPost').
        pause(250);

      callback();
    });

    this.Then(/^I should delete the new post$/, function (callback) {
      log.info("Then: I should delete the new post");
      helper.world.browser.
        waitForExist(".deletePost").
        waitForVisible(".deletePost").
        click('.deletePost').
        pause(500).
        //saveScreenshot(process.env.PWD + '/delete1.png').
        click("[data-bb-handler='confirm']").
        pause(100).
        //saveScreenshot(process.env.PWD + '/delete2.png').
        pause(100);


      callback();
    });

   this.When(/^I click on edit post$/, function (callback) {
      log.info("When: I click on edit post");
      helper.world.browser.
        waitForExist(".editPost").
        waitForVisible(".editPost").
        click('.editPost').
        pause(100);

      callback();
   });

   this.When(/^I edit a post$/, function (callback) {
      log.info("When: I edit a  post");
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
      log.info("Then: I should see edited post");

      helper.world.browser.
        //saveScreenshot(process.env.PWD + '/edit.png').
        waitForExist(".postItem").
        waitForVisible(".postItem").
        getText(".postItem", function(err, res){
          //log.info(res);
          assert.equal(res[0], "EDITED");
        }).
        pause(100);

      callback();
   });


  };
})();