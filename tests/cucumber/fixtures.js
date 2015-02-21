(function () {

  'use strict';
  //if(Meteor.isClient){
  if (Meteor.isClient || !process.env.IS_MIRROR) {
    return;
  }

  Meteor.startup(function () {
    _clearState();
  });

  Meteor.methods({
    'clearState': _clearState
  });

  function _clearState () {
    Posts.remove({});
    _insertPosts();
    _insertUser();
  }

  function _insertUser(){
    Accounts.createUser({username: 'sunil', 
      email: 'sunil@y.com',
      password: 'sunil123'});
  }

  function _insertPosts () {
    Posts.insert({
      title: 'Introducing Telescope',
      url: 'http://sachagreif.com/introducing-telescope/'
    });
    Posts.insert({
      title: 'Meteor',
      url: 'http://meteor.com'
    });
  }

  function _createJsonServerRoute (route, object) {
    Router.route(route, function () {
      this.response.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
      });
      if (typeof object === 'function') {
        this.response.end(JSON.stringify(object()));
      } else {
        this.response.end(JSON.stringify(object));
      }
    }, {where: 'server'});
  }

})();