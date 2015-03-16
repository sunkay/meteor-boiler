Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: '404',
	waitOn: function() 
	{ 
		//return Meteor.subscribe('posts'); 
	}
});

Router.route('blank', {
	name: "blankTemplate"
}); 


//---- Content Protection -------

Router.plugin('ensureSignedIn', {
	only: ['newPost', 'blankTemplate']
});