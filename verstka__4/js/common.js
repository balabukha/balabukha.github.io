// var section2Div = document.getElementsByClassName('s_dark');
// console.log(section2Div);

// var elemInSection2 = section2Div[0].getElementsByClassName('info-item-wrap');
// console.log(elemInSection2);
// var maxHeight = 0;
// getHeight(elemInSection2);

// function getHeight(elem){
// 	for (var i = 0; i < elemInSection2.length; i++) {
// 		var element = elemInSection2[i];
// 		console.log(element.style.offsetHeight)
// 	}
// }




;$(document).ready(function() {

	$('.section-bottom .buttons').click(function(){
		$('#callback h4').html($(this).text());
	}).magnificPopup({
	type:'inline',
	mainClass: 'mfp-fade'
	});


	$(".top").click(function() {
    $('html, body').animate({
        scrollTop: $(".main-head").offset().top
    }, 2500);
});

	$(".arrow-bottom").click(function() {
    $('html, body').animate({
        scrollTop: $(".homesection").offset().top
    }, 1000);
});

$('.toggle-mnu').click(function(){
	$(this).toggleClass('on');
	$('.main-mnu').slideToggle();
});

$('.slider').owlCarousel({
	items : 1,
	nav: true,
	navText: ''
});




	// SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

