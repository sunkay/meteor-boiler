//--- Publish posts ----
Meteor.publish('posts', function(options){
	check(options, {
		sort: Object,
		limit: Number
	});
	return Posts.find({}, options);
});

Meteor.publish('singlePost', function(id){
	check(id, String);

	return Posts.find(id);
});


// ---- Publishing a collection called userlist ------

Meteor.publish('allusers', function(){
	var sub = this;

	var allusersCursor = Meteor.users.find({});
	Mongo.Collection._publishCursor(allusersCursor, sub, 'allusers');

	sub.ready();

});