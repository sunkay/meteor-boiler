Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 100
	},
	url: {
		type: String,
		label: "URL",
		min: 0
	}
}));

/*
Posts.allow({
	insert: function (userId, doc) {
		return (userId != 0)? true : false;
	}
});
*/

Meteor.methods({
	submitPost: function(post, modifier, documentId){
		//console.log(arguments);
		// basic checks

		check(post, {
			title: String,
			url: String
		});
		check(modifier, Match.Any);
		check(documentId, Match.Any);

		console.log("in submit post: "+post);

		//rate limiting

		//properties checks
		var user = Meteor.user();
		if(!user)
			throw new Meteor.Error(601, 'sorry you have to login to insert a post');

		post = _.extend(post, {
			userId: user._id,
			author: user.username,
			createdAt: new Date()
		});

		//call insert post into DB
		var postId = Posts.insert(post);

		return {
			_id: postId
		};
	}
});	