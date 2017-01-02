$(function() {

	$('#navigation ul li:first-child').addClass('first')
	$('#navigation ul li:last-child').addClass('last')
	$('section:last').addClass('last-section')
});

$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		controlsContainer: ".slider-holder",
		slideshowSpeed: 5000,
		directionNav: false,
		controlNav: false,
		animationDuration: 900
	});
	
	$('#partners-slider .slider-holder2').carouFredSel({
		align: 'center',
		auto    : false,
		circular: false,
		infinite: false,
	    items: {
			visible: "variable",
			width: "variable"
		},
		scroll: 1,
		prev: ".prev-arr",
		next: ".next-arr"
	});
});
