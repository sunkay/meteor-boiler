// adding autoform hooks to manage errors and validations

AutoForm.hooks({
	newPost: {
		before: {

		},
		onError: function(operation, error, template){
			console.log("in newPost Error: "+error.message);
			// show an error message to the user
			FlashMessages.sendError("Sorry you need to be logged in to do a new post...");
		}
	}

});