Simple Meteor Boilerplate 

This meteor boilerplate is coming out of my frustrations in coming with a good theme that is responsive and works as soon as you clone it. The main motivations are to have something sophesticated that is working straight out of the box, that can be customizable and has a robust set of patterns that can be mimiced for a larger undertaking. 

The primary goals in priority order:
   - A good customizable theme
   - Security
   - Judicious use of key packages
   - Working iOS & Android containers
   - Testing with Velocity & Cucumberjs + patterns that can be followed
   - Finally, everything should work out of the box 

To that end I have created a public roadmap for this on Trello. Shoot me an email or open an issue if it needs to be added to the roadmap.

Roadmap: [meteor boiler @ trello][trello]
Demo: [meteor-boiler][demo]

This boilerplate uses the following themes and packages. 

Theme: AdminLTE
	- Provides a decent responsive bootstrap-3 theme 
	- Boilerplate is tested for 3 breakpoints

Logging:
	Pince

Testing:
	Velocity & Cucumberjs
	The tests folder contains a set of examples, tags and hooks which allows for working through this from the ground up
	Browser-based end-to-end testing with velocity, cucumber & webdriver.io

Integrated & Tested Packages:
	UserAccounts
	Collection2 
	AutoForm
	FlashMessages
	roles - todo
	user-admin - todo

Security:
	audit-argument-checks
	Browser Policy d
	checks in Meteor methods
	sanitize-html (todo)
	ongoworks:security (todo)

CRUD
   A pattern to do CRUD for collections as securely as possible
   This pattern can be copied and adapted for more collections

[trello]: https://trello.com/b/grrlZ9pd/meteor-boilerplate
[demo]: http://meteor-boiler.meteor.com

	