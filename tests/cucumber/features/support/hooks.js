(function () {

  'use strict';

  module.exports = function () {

    var helper = this;

    this.Before(function () {
      var world = helper.world;
      var next = arguments[arguments.length - 1];
      world.browser.
        init().
        setViewportSize({
          width: 1280,
          height: 1024
        }).
        call(next);
    });

        /**
     * before function to always ensure the user is logged in
     */
    this.Before("@beforeHookLogin", function(callback){
      console.log("start @beforeHookLogin");
      //always signout before sigingin in
      helper.world.browser.
        url(helper.world.cucumber.mirror.rootUrl).
        waitForExist('#at-nav-button').
        waitForVisible('#at-nav-button').
        click('#at-nav-button');


      // make sure the user is Authenticated
      helper.world.browser.
        url(helper.world.cucumber.mirror.rootUrl+"sign-in").
        waitForExist('.at-pwd-form').
        waitForVisible('.at-pwd-form').
        setValue('#at-field-email', 'sunil@y.com').
        setValue('#at-field-password', 'sunil123').
        click('#at-btn');
        
      console.log("End @beforeHookLogin");

      callback();
    });

    /**
     * before function to always ensure the user is logged out
     */
    this.Before("@beforeHookLogout", function(callback){
      console.log("start @beforeHookLogout");

      //always signout before sigingin in
      helper.world.browser.
        url(helper.world.cucumber.mirror.rootUrl).
        waitForExist('#at-nav-button').
        waitForVisible('#at-nav-button').
        click('#at-nav-button');

      console.log("end @beforeHookLogout");

      callback();
    });

    this.After(function () {
      var world = helper.world;
      var next = arguments[arguments.length - 1];
      world.browser.
        end().
        call(next);
    });

  };

})();