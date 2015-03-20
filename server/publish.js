//--- Publish posts + limit ----
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
// ---- Limits the number of users published ------

Meteor.publish('allusers', function(options){
	check(options, {
		sort: Object,
		limit: Number
	});

	var sub = this;

	var allusersCursor = Meteor.users.find({}, options);
	Mongo.Collection._publishCursor(allusersCursor, sub, 'allusers');

	sub.ready();

});