(function () {

  'use strict';

  var assert = require('assert');


  module.exports = function () {

    // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
    var url = require('url');


    this.Given(/^I am a new user$/, function () {
      // no callbacks! DDP has been promisified so you can just return it
      return this.server.call('reset'); // this.ddp is a connection to the mirror
    });

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
      // WebdriverIO supports Promises/A+ out the box, so you can return that too
      this.client. // this.browser is a pre-configured WebdriverIO + PhantomJS instance
        url(url.resolve(process.env.ROOT_URL, relativePath)). // process.env.ROOT_URL always points to the mirror
        call(callback);
      });

    this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle, callback) {
      // you can use chai-as-promised in step definitions also
      this.client.
        waitForVisible('body *'). // WebdriverIO chain-able promise magic
        getTitle().should.become(expectedTitle).and.notify(callback);
      });

    this.Then(/^I should see (\d+) posts$/, function (numPosts, callback) {
      //console.log("Then: I should see posts "+numPosts);
      this.client.
        elements(".postItem", function(err, res){
          assert.equal(res.value.length, numPosts);
          //console.log(".. #numposts elements len: "+ res.value.length);
        }).call(callback);
    });


    this.Given(/^I am logged in$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      this.client.url(url.resolve(process.env.ROOT_URL, '/')).
      executeAsync(function(done){
        Meteor.loginWithPassword('sunny@y.com', 'sunny123', done);
      }).
      //saveScreenshot("sunil-test.png").
      call(callback);
    });

    this.Given(/^I am logged out$/, function (callback) {
      this.client.
        url(url.resolve(process.env.ROOT_URL, '/')).        
        waitForExist('#at-nav-button').
        waitForVisible('#at-nav-button').
        click('#at-nav-button').
        pause(200).
        call(callback);
    });

    this.When(/^I submit a new post$/, function (callback) {
      this.client.
        waitForExist("#newPost").
        waitForVisible('#newPost').
        setValue("[name='title']", 'Test Post').
        setValue("[name='url']", 'http://testurl.com').
        submitForm('#newPost').
        pause(10).
        call(callback);
    });

    this.Then(/^I should see the post with title "([^"]*)"$/, function (postTitle, callback) {
      this.client.
        waitForExist(".postItem").
        waitForVisible('.postItem').
        getText(".postItem", function(err, res){
          assert.equal(res[0], postTitle);
        }).call(callback);
    });

    this.Then(/^I should delete the new post$/, function (callback) {

      this.client.
        waitForExist(".deletePost").
        waitForVisible(".deletePost").
        //saveScreenshot(process.env.PWD+'/.screenshots' + '/delete1.png').
        click('.deletePost').
        pause(250). 
        click("[data-bb-handler='confirm']").
        call(callback);
    });


    this.When(/^I click on edit post$/, function (callback) {
      this.client.
        waitForExist(".editPost").
        waitForVisible(".editPost").
        click('.editPost').
        pause(20).
        call(callback);
    });

    this.When(/^I edit a post$/, function (callback) {
      this.client.
        waitForExist("#editPost").
        waitForVisible("#editPost").
        setValue("[name='title']", 'EDITED Post').
        setValue("[name='url']", 'http://testurl.com').
        submitForm('#editPost').
        pause(100).
        call(callback);
    });

    this.Then(/^I should see a "([^"]*)" form$/, function (title, callback) {
      this.client.
        waitForExist('.at-title').      
        waitForVisible('.at-title').
        getText(".at-title h3", function(err, res){
          assert.equal(res, title);
        }).
        call(callback);
    });

  };

})(); 