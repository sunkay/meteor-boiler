Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: '404',
	waitOn: function() 
	{ 
		//return Meteor.subscribe('posts'); 
	}
});

//Router.route('/', {name: "blankTemplate"}); 
Router.route('/', function(){
	this.redirect('/posts/paginate/10');
}); 
Router.route('/posts/paginate', function(){
	this.redirect('/posts/paginate/10');
}); 

Router.route('/posts/:_id', {
	name: 'postPage',
	waitOn: function(){
		return Meteor.subscribe('singlePost', this.params._id)
	},
	data: function(){ 
		return Posts.findOne(this.params._id); 
	}
});
Router.route('/newPost', {
	name: "newPost"
});

Router.route('/posts/:_id/edit', {
	name: "editPost",
	waitOn: function(){
		return Meteor.subscribe('singlePost', this.params._id)
	},
	data: function(){ return Posts.findOne(this.params._id); }
});

Router.route('/posts/paginate/:postsLimit?', {
	name: "postsList",
}); 

PostsListController = RouteController.extend({
	template: 'postsList',
	increment: 10,
	postsLimit: function(){
		return parseInt(this.params.postsLimit)||this.increment;
	},
	findOptions: function(){
		return {sort: {createdAt: -1}, limit: this.postsLimit()}
	},
	posts: function(){
		return Posts.find({}, this.findOptions());
	},
	subscriptions: function(){
		this.postsSub = Meteor.subscribe('posts', this.findOptions());
	},
	data: function(){
		var hasMore = this.posts().count() === this.postsLimit();
		var nextPath = this.route.path({postsLimit: this.postsLimit() + this.increment});
		return {
			posts: this.posts(),
			ready: this.postsSub.ready,
			nextPath: hasMore ? nextPath : null
		};			
	}
});


Router.route('blank', {
	name: "blankTemplate"
}); 

Router.route('login', {name: "atForm"});

// user list
Router.route('users', {
	name: "userList",
	waitOn: function(){
		return Meteor.subscribe('allusers');
	}
});

//---- Content Protection -------

Router.plugin('ensureSignedIn', {
	only: ['newPost', 'blankTemplate']
});