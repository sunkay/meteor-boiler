if (Meteor.isClient) {
	Session.set("Mongol", {
		'collections': ['Posts'],
		'display': false,
		'opacity_normal': ".7",
		'opacity_expand': ".9",
	});
}