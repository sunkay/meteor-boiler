// adding autoform hooks to manage errors and validations

AutoForm.hooks({
	newPost: {
		before: {

		},
		onError: function(operation, error, template){
			// show an error message to the user
			// is this necessary?
			FlashMessages.sendError(error.message.split(':')[0]);
		},
		onSuccess: function(operation, post, template){
			// go to the post details page
			Router.go('postPage', {_id:post._id});
		}
	}

});