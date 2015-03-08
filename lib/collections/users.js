Meteor.methods({
	deleteUserById: function(userId){
		check(userId, String);
		log.info("Id: " + userId);

		var user = Meteor.users.findOne({_id: userId});
		log.info(user);

		// only an Admin can delete posts
		var currentUser = Meteor.user();
		if(!isAdmin(currentUser))
			throw new Meteor.Error(LOGIN_NEEDED, 'sorry you have to be admin to delete a user');

		//delete post
		Meteor.users.remove(userId);
	}
});