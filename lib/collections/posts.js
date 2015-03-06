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
	},
	userId: {
		type: String,
		optional: true,
		autoform: {
			omit: true
		}
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
		//log.info(arguments);

		//security checks

		check(post, {
			title: String,
			url: String
		});
		check(modifier, Match.Any);
		check(documentId, Match.Any);

		var user = Meteor.user();
		if(!user)
			throw new Meteor.Error(LOGIN_NEEDED, 'sorry you have to login to insert a post');

		//rate limiting

		//properties checks

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
	},
	deletePostById: function(postId){
		check(postId, String);

		var post = Posts.findOne({_id: postId});
		//log.info(post);

		// you can only delete posts if you are logged in 
		var user = Meteor.user();
		if(!user)
			throw new Meteor.Error(LOGIN_NEEDED, 'sorry you have to login to delete a post');

		// you can only delete posts created by you or if you are an admin
		//log.info("userId: "+user._id+" post.user: "+post.userId);
		//log.info(Roles.userIsInRole(user, 'admin'));
		//if(user._id != post.userId && !Roles.userIsInRole(user, 'admin'))
		if(!can.edit(user, post))
			throw new Meteor.Error(CANNOT_DELETE, 'sorry you can delete only posts created by you');

		//delete post
		Posts.remove(postId);
	},
	editPost: function(post, modifier, documentId){
		//log.info(arguments);
		//log.info(post);

		check(post, {
			title: String,
			url: String
		});
		check(modifier, {
			$set: {
				title: String,
				url: String
			}
		});

		check(documentId, String);
		
		// you can only edit posts if you are logged in
		var user = Meteor.user();
		var post_t = Posts.findOne({"_id":documentId});
		if(!can.edit(user, post_t))
			throw new Meteor.Error(LOGIN_NEEDED, 'sorry you do not enough permissions to edit');

		Posts.update(documentId, modifier);

	}
});	