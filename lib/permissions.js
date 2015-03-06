
can = {};

// Permissions
// 
isAdminById=function(userId){
  var user = Meteor.users.findOne(userId);
  return !!(user && isAdmin(user));
};


isAdmin=function(user){
  user = (typeof user === 'undefined') ? Meteor.user() : user;
  return Roles.userIsInRole(user, 'admin');
};


// user:                Defaults to Meteor.user()
//
// return true if all is well, false
can.view = function (user) {

    if (Meteor.isClient) {
      // on client only, default to the current user
      user = (typeof user === 'undefined') ? Meteor.user() : user;
    }

    return (!!user && isAdmin(user));

};
can.viewById = function (userId) {
  var user = Meteor.users.findOne(userId);
  return can.view(user);
};

can.edit = function (user, item, returnError) {
  user = (typeof user === 'undefined') ? Meteor.user() : user;

  if (!user || !item || (user._id !== item.userId && !isAdmin(user))) {
    return returnError ? "no_rights" : false;
  } else {
    return true;
  }
};
can.editById = function (userId, item) {
  var user = Meteor.users.findOne(userId);
  return can.edit(user, item);
};

