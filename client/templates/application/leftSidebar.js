Template.leftSidebar.helpers({
	admin: function(){
		return isAdmin(this.currentUser);
	}
});