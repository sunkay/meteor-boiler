
Router.route('login', {name: "atForm"});

// user list
Router.route('users', {
	name: "userList",
	waitOn: function(){
		return Meteor.subscribe('allusers');
	}
});
