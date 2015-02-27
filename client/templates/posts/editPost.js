// adding autoform hooks to manage errors and validations

AutoForm.hooks({
	editPost: {
		before: {
			editPost: function(doc, template){
				var post = doc;

				return post;
			}
		},
		onError: function(operation, error, template){
			// show an error message to the user
			// is this necessary?
			FlashMessages.sendError(error.message.split(':')[0]);
		},
		onSuccess: function(operation, post, template){
			// go to the post details page
			Router.go('postsList');
		}
	}

});