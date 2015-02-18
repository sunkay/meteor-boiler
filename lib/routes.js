Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() 
	{ 
		return Meteor.subscribe('posts'); 
	}
});

//Router.route('/', {name: "blankTemplate"}); 
Router.route('/', {name: "postsList"}); 
Router.route('blank', {
	name: "blankTemplate",
	onBeforeAction: AccountsTemplates.ensureSignedIn
}); 
Router.route('login', {name: "atForm"});