$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({
    'overflow': 'visible'
  });

	$("input,select,textarea").jqBootstrapValidation();
	$(".top_menu ul a").mPageScroll2id();
});


$(document).ready(function() {

$('#portfolio_grid').mixItUp();

$('.s_portfolio li').click(function(){
	$('.s_portfolio li').removeClass('active');
	$(this).addClass('active');
});

$('.top_text h1').animated('fadeInDown', 'fadeOutUp');
$('.top_text p').animated('fadeInUp', 'fadeOutDown');
$('.section_header').animated('fadeInUp', 'fadeOutDown');

$('.animation_left').animated('fadeInLeft', 'fadeOutLeft');
$('.animation_right').animated('fadeInRight', 'fadeOutRight');
$('.animation_photo').animated('flipInY', 'flipOutY');


$('.popup').magnificPopup({type:'image'});
$('.popup_content').magnificPopup({type: 'inline', showCloseBtn: true});


	function heightDetect() {
	// высота header по высоте экрана:
	$('.main_head').css('height', $(window).height())
	};
	heightDetect();
	$(window).resize(function() {
	heightDetect()
	});

	$('.top_menu ul a').click(function(){
		$('.top_menu').fadeOut(600);
	}).append('<span>');

	$('.toggl_mnu').click(function() {
		if ($('.top_menu').is(':visible')) {
			$('.top_text').removeClass('h_opacity');
			$('.top_menu').fadeOut(600);
			$('.top_menu ul li a').removeClass('fadeInUp animated');
		} else {
			$('.top_text').addClass('h_opacity')
			$('.top_menu').fadeIn(600);
			$('.top_menu li a').addClass('fadeInUp animated');
		};
	});

});

// var iconElement = document.getElementById('icon');
// var options = {
//     from: 'fa-bars',
//     to: 'fa-arrow-right',
//     animation: 'horizontalFlip'
// };

// iconate(iconElement, options);