$(document).ready(function(){
	$(".nav a").click(function(e){
		e.preventDefault();
		var $target = $($(this).attr('href'));
		$(document).scrollTo($target.offset().top-200,500);
	})
})