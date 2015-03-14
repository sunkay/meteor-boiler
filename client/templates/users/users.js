
Template.userList.helpers({
	allusers: function(){
		return UserList.find();
	}
});

Template.userItem.events({
	'click .deleteUser': function(e){
		e.preventDefault();

		//log.info("In Delete User");

		var user = this;
		bootbox.confirm("Are you sure?", function(result){
			if(!result){
				FlashMessages.sendSuccess("Whew!! not deleted :-)");
				return;
			}

			Meteor.call('deleteUserById', user._id, 
				function (error) {
					if(error){
						log.error(error);
						FlashMessages.sendError(error.reason);
					} else {
						FlashMessages.sendSuccess("User has been deleted");
					}
				});


			Router.go("/users");
		});		
	}
});