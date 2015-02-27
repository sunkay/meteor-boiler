Template.postsList.helpers({
	posts: function(){
		return Posts.find();
	}
});

Template.postItem.events({
	'click .deletePost': function(e){
		e.preventDefault();

		var post = this;
		
		Router.go("/");
		Meteor.call('deletePostById', post._id, 
			function (error) {
				if(error){
					console.log(error);
					FlashMessages.sendError(error.reason);
				} else {
					FlashMessages.sendSuccess("Post has been deleted");
				}
			});
	}
});