if(Meteor.isClient){
	return;
}

var user_id = 0;
//create a dummy user
if(Meteor.users.find().count() === 0){
  user_id = Accounts.createUser({
    username: 'sunny',
    email : 'sunny@y.com',
    password : 'sunny123',
    profile  : {
        //publicly visible fields like firstname goes here
        name: "dummy-name",
      }
    });  

  // create an admin user
  admin_id = Accounts.createUser({
    username: 'admin',
    email : 'admin@y.com',
    password : 'admin123',
    profile  : {
        //publicly visible fields like firstname goes here
        name: "super",
      }
    });

  Roles.addUsersToRoles(admin_id, 'admin');
} else {
  user_id = Meteor.users.findOne({"username": 'sunny'})._id;
  console.log("test  "+user_id);
}


if (Posts.find().count() === 0) {  
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    userId: user_id,
    createdAt: new Date()
  });
  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    userId: user_id,
    createdAt: new Date()
  });
  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    userId: 0,
    createdAt: new Date()
  }); 
}