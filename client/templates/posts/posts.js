
Template.postItem.events({
	'click .deletePost': function(e){
		e.preventDefault();

		//log.info("In Delete Post");

		var post = this;
		bootbox.confirm("Are you sure?", function(result){
			if(!result){
				FlashMessages.sendSuccess("Whew!! not deleted :-)");
				return;
			}

			Meteor.call('deletePostById', post._id, 
				function (error) {
					if(error){
						log.error(error);
						FlashMessages.sendError(error.reason);
					} else {
						FlashMessages.sendSuccess("Post has been deleted");
					}
				});


			Router.go("/");
		});		
	}
});