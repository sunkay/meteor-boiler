(function () {

  'use strict';

  if (Meteor.isClient || !process.env.IS_MIRROR) {
  	return;
  }


  Meteor.startup(function () {
  	setupData();
  });

  Meteor.methods({
  	'reset' : function() {
      // you can do some resetting of your app here
      // fixture code will only execute inside mirrors neither runs
      // inside the main app nor gets bundled to production.
      console.log("In reset...");
      Meteor.users.remove({});
      Posts.remove({});
  	}, 

  	'insertUserAndPosts' : function(){
  		console.log("In insertUserAndPosts...");
  		var userid = _insertUser();    
  		_insertPosts(userid);
  	}
  });

  function setupData(){
  	console.log("in setupData.....");
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

})();