var $sections=[],
	sectiony={},
	$doc=$(document),
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
})

$doc.scroll(function(e){
	var y = $doc.scrollTop(),
		section = '';
	for(var o in sectiony){
		if(y>sectiony[o])section=o;
	}
	if(section!=lastsection){
		lastsection=section;
		$("body").attr('class',section);
	}
})

$(window).resize(function(){
	$sections.each(function(){
		sectiony[$(this).attr('id')] = $(this).position().top;
	})
})