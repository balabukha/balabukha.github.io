;$(window).load(function() {



	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


; $(document).ready(function () {

$('.gallery a').magnificPopup({
		type: 'image',
		closeBtnInside: true,
    closeOnContentClick: true,

    image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.src+'" target="_blank">open original</a>';
			}
		},

  gallery:{enabled:true},
  callbacks: {
    
    buildControls: function() {
      // re-appends controls inside the main container
      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    }
    
  },
    removalDelay: 300,
  	mainClass: 'mfp-with-fade'
	});

// 	$(".sorting button").click(function(){
// 		var mixer = mixitup('.gallery');
// 	var wall = new freewall(".gallery");
// wall.reset({
// 	selector: "a",
// 	engine: 'giot',
// 	animate: true,
// 	cellW: 320,
// 	cellH: "auto",
// 	gutterX : 5,
// 	gutterY : 5,
// 	onResize: function() {
// 		wall.fitWidth();
// 	}
// });

// var images = wall.container.find("a");
// images.find("img").load(function() {
// 	wall.fitWidth();
// });
// 	})



	$(".gallery a").hover(function(){
		$(".gallery a").css("opacity", '.6');
		$(this).css("opacity", '1');
	})

	var wall = new freewall(".gallery");
wall.reset({
	selector: "a",
	engine: 'giot',
	animate: true,
	cellW: 320,
	cellH: "auto",
	gutterX : 5,
	gutterY : 5,
	onResize: function() {
		wall.fitWidth();
	}
});

var images = wall.container.find("a");
images.find("img").load(function() {
	wall.fitWidth();
});

// wall.filter(".all");
$(".filter-label").click(function() {
	$(".filter-label").removeClass("active");
	var filter = $(this).addClass('active').data('filter');
	if (filter) {
		wall.filter(filter);
	} else {
		wall.unFilter();
	}
});

wall.fitWidth();



// $(".filter-label").click(function() {
// 	$(".filter-label").removeClass("active");
// 	var filter = $(this).addClass("active").data("filter");
// 	wall.filter(filter);
// 	setTimeout(function() {
// 		$(window).resize();
// 		wall.fitWidth();
// 	}, 400);
// });


	$(".btn_mnu").click(function () {
		$(this).toggleClass("active");
		$(".left_side").toggleClass("active");
		// $(".aside_content").toggleClass("hidden");
		$(".content").toggleClass("active");
	});


	// SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			alert("Спасибо за заявку!");
			setTimeout(function () {
				$.magnificPopup.close();
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});



	//Chrome Smooth Scroll
// 	try {
// 		$.browserSelector();
// 		if ($("html").hasClass("chrome")) {
// 			$.smoothScroll();
// 		}
// 	} catch (err) {

// 	};

// 	$("img, a").on("dragstart", function (event) { event.preventDefault(); });

});



// $(function() {
// 				var wall = new Freewall("#freewall");
// 				wall.reset({
// 					selector: '.brick',
// 					animate: true,
// 					cellW: 160,
// 					cellH: 160,
// 					fixSize: 0,
// 					onResize: function() {
// 						wall.refresh();
// 					}
// 				});

// 				wall.filter(".all");
// 				$(".filter-label").click(function() {
// 					$(".filter-label").removeClass("active");
// 					var filter = $(this).addClass('active').data('filter');
// 					if (filter) {
// 						wall.filter(filter);
// 					} else {
// 						wall.unFilter();
// 					}
// 				});

// 				wall.fitWidth();
// 			});