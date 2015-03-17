
Router.route('login', {name: "atForm"});

Router.route('/users', function(){
	this.redirect('/users/paginate/10');
}); 
Router.route('/users/paginate', function(){
	this.redirect('/users/paginate/10');
}); 

Router.route('/users/paginate/:usersLimit?', {
	name: "userList",
}); 

UserListController = RouteController.extend({
	template: 'userList',
	increment: 10,
	usersLimit: function(){
		return parseInt(this.params.usersLimit) || this.increment;
	},
	findOptions: function(){
		return {sort: {createdAt: -1}, limit: this.usersLimit()}
	},
	subscriptions: function(){
		this.usersSub =  Meteor.subscribe('allusers', this.findOptions());
	},
	data: function(){
		var nextPath = this.route.path({usersLimit: this.usersLimit() + this.increment});
		return {
			ready: this.usersSub.ready,
			nextPath: nextPath
		}
	}
});
