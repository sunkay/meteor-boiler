
Router.route('login', {name: "atForm"});

Router.route('/users', function(){
	this.redirect('/users/paginate/10');
}); 
Router.route('/users/paginate', function(){
	this.redirect('/users/paginate/10');
}); 

// user list
Router.route('/users/paginate/:usersLimit?', {
	name: "userList",
	waitOn: function(){
		var limit = parseInt(this.params.usersLimit) || 10;
		return Meteor.subscribe('allusers', {
			sort: {createdAt: -1}, 
			limit: limit
		});
	}
});
