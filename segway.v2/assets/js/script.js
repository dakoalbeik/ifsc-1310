

$(document).ready(function(){
	
	$(".faq h3:first").addClass("active");
	$(".faq p:not(:first)").hide();

	$(".faq h3").click(function(){
		$(this).next("p").slideToggle("slow")
		.siblings("p:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});

   
});
