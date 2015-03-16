// for collections use collection names instead of variable names

if (Meteor.isClient) {
	Session.set("Mongol", {
		'collections': ['posts', 'allusers'],
		'display': true,
		'opacity_normal': ".7",
		'opacity_expand': ".9",
		'disable_warning': "false"
	});
}