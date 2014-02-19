angular.module("xenium", [
		'pascalprecht.translate'

	])
.config(['$translateProvider', function ($translateProvider) {
	 $translateProvider.translations('en', dictEN)
                      .translations('bg', dictBG);

     $translateProvider.preferredLanguage('en');
}])
.controller('MainCtrl', ['$scope', '$translate', function ($scope, $translate) {
	$scope.changeLanguage = function (key) {
	    $translate.use(key);
	    $scope.lang = !$scope.lang;
	  };
}])

var $sections=[],
	sectiony={},
	$doc = $(document),
	lastsection = '';
$doc.ready(function(){
	$(".nav a").click(function(e){
		e.preventDefault();
		var href = $(this).attr('href')
		var $target = $(href);
		$doc.scrollTo($target.offset().top-200,500);
	})
	$sections = $('.section-outer');
	$(window).resize();


	// // Create the dropdown base
	// $("<select />").appendTo(".inner");
	// // Create default option "Go to..."
	// $("<option />", {
	//    "selected": "selected",
	//    "value"   : "",
	//    "text"    : "Go to..."
	// }).appendTo(".inner select");

	// // Populate dropdown with menu items
	// $(".nav a").each(function() {
	//  var el = $(this);
	//  $("<option />", {
	//      "value"   : el.attr("href"),
	//      "text"    : el.text()
	//  }).appendTo(".inner select");
	// });

	// $(".inner select").change(function() {
	//   window.location = $(this).find("option:selected").val();
	// });var nav = responsiveNav(".nav-collapse");
	var nav = responsiveNav(".nav", { 
        label: "&#9776;", // String: Label for the navigation toggle/
        customToggle: "", // Selector: Specify the ID of a custom toggle
        openPos: "relative", // String: Position of the opened nav, relative or static/
    });
})

$doc.scroll(function(e){
	var y = $doc.scrollTop(),
		section = '';
	for(var o in sectiony){
		if(y>sectiony[o])section=o;
	}
	if(section!=lastsection){
		lastsection=section;
		$("body").attr('class', section);
	}
})

$(window).resize(function(){
	$sections.each(function(){
		sectiony[$(this).attr('id')] = $(this).position().top;
	})
})



