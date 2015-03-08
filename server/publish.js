//--- Publish posts ----
Meteor.publish('posts', function(){ 
	return Posts.find();
});

// ---- Publishing a collection called userlist ------

Meteor.publish('allusers', function(){
	var self = this;
	var handle = Meteor.users.find({}).observeChanges({
		added: function (id, fields) {
			self.added('userlist', id, fields);
		}, 
		changed: function (id, fields) {
			self.changed('userlist', id, fields);
		},
		removed: function (id) {
			self.removed('userslist', id);
		}
	});
	self.ready();

	self.onStop(function () {
		handle.stop();
	});
});