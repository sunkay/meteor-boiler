Template.header.events({
	"click [data-toggle='offcanvas']": function(e){
		e.preventDefault();
		//Meteor.log.debug('clicked on nav menu');
		//If window is small enough, enable sidebar push menu
        if ($(window).width() <= 992) {
            $('.row-offcanvas').toggleClass('active');
            $('.left-side').removeClass("collapse-left");
            $(".right-side").removeClass("strech");
            $('.row-offcanvas').toggleClass("relative");
        } else {
            //Else, enable content streching
            $('.left-side').toggleClass("collapse-left");
            $(".right-side").toggleClass("strech");
        }
    }
});

//-------------------------------------------------
// Collapse navbar after click on a navbar item
//-------------------------------------------------
 
Template.layout.events({
    "click .sidebar": function(e){
        $('.row-offcanvas').toggleClass('active');
        $('.left-side').removeClass("collapse-left");
        $(".right-side").removeClass("strech");
        $('.row-offcanvas').toggleClass("relative");
    }
});