//--- Publish posts ----
Meteor.publish('posts', function(){ 
	return Posts.find();
});

// ---- Publishing a collection called userlist ------

Meteor.publish('allusers', function(){
	var sub = this;

	var allusersCursor = Meteor.users.find({});
	Mongo.Collection._publishCursor(allusersCursor, sub, 'allusers');

	sub.ready();

});