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
      Meteor.users.remove({});
      Posts.remove({});
      var userid = _insertUser();    
      _insertPosts(userid);
    }

    function _insertUser(){
      if(Meteor.users.find().count() === 0){
        var userid = Accounts.createUser({
          username: 'sunny',
          email : 'sunny@y.com',
          password : 'sunny123',
          profile  : {
              //publicly visible fields like firstname goes here
              firstname: "dummy_FN",
              lastname: "dummy_LN"
            }
          });  
        return userid;
      }
    }

    function _insertPosts (user_id) {
      if (Posts.find().count() === 0) { 
        Posts.insert({
          title: 'Introducing Telescope',
          url: 'http://sachagreif.com/introducing-telescope/',
          userId: user_id,
          createdAt: new Date()
        });
        for(var i=0; i<15; i++){
          Posts.insert({
            title: Fake.sentence(5),
            url: 'http://'+Fake.word()+'.com',
            userId: user_id,
            createdAt: new Date()
          });    
        }
      }
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