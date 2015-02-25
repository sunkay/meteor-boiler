Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 100
	},
	url: {
		type: String,
		label: "URL",
		min: 0
	}
}));

Posts.allow({
	insert: function (userId, doc) {
		return (userId != 0)? true : false;
	}
});