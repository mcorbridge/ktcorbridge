$(document).ready(function()
{

	console.log('jquery ready');

	var n=0;

	var easing = [
		"easeInQuad",
		"easeOutQuad",
		"easeInOutQuad",
		"easeInCubic",
		"easeOutCubic",
		"easeInOutCubic",
		"easeInQuart",
		"easeOutQuart",
		"easeInOutQuart",
		"easeInQuint",
		"easeOutQuint",
		"easeInOutQuint",
		"easeInSine",
		"easeOutSine",
		"easeInOutSine",
		"easeInExpo",
		"easeOutExpo",
		"easeInOutExpo",
		"easeInCirc",
		"easeOutCirc",
		"easeInOutCirc",
		"easeInElastic",
		"easeOutElastic",
		"easeInOutElastic",
		"easeInBack",
		"easeOutBack",
		"easeInOutBack",
		"easeInBounce",
		"easeOutBounce",
		"easeInOutBounce"
	];

	var docWidth = $(document).width();
	var docHeight = $(document).height();


	console.log("docHeight " + docHeight + " docWidth " + docWidth);


	var cache = [];
	// Arguments are image paths relative to the current page.
	function preLoadImages() {
		var args_len = arguments.length;
		for (var i = args_len; i--;) {
			var cacheImage = document.createElement('img');
			cacheImage.src = arguments[i];
			cache.push(cacheImage);
			console.log('cached: ' + cacheImage );
		}
	}

	preLoadImages("images/contactY.png", "images/photosY.png", "images/resumeY.png", "images/mediaY.png");

	$('.katieName0').delay(2000).animate({top: (docHeight*0.58)+"px"},2000,"easeOutQuad");
	$('.imgKatieMain').delay(2000).animate({top: (docHeight*0.20)+"px"},2000,"easeOutQuad",onMoveComplete);

	$('.katieName0').on('click', function(){
		$('.navTicket').fadeIn();
		$('.imgKatieMain').fadeIn();
	});

	function onMoveComplete(){
		$('.imgContact0').fadeIn(250);
		$('.imgContact1').fadeIn(500);
		$('.imgContact2').fadeIn(750);
		$('.imgContact3').fadeIn(1000);
		var navTop = $('.imgKatieMain').offset().top + 375 + "px";
		var navLeft = $('.imgKatieMain').offset().left + 50 + "px";
		$('.navTicket').css('top',navTop).css('left',navLeft);
	}

	$('.imgContact0').hover(
		function(){
			$(this).css('background-image','url(images/contactY.png)');
			$(this).animate({top:'20px'});
		},
		function(){
			$(this).css('background-image','url(images/contact.png)');
			$(this).animate({top:'0px'});
		}
	);

	$('.imgContact1').hover(
		function(){
			$(this).css('background-image','url(images/resumeY.png)');
			$(this).animate({top:'20px'});
		},
		function(){
			$(this).css('background-image','url(images/resume.png)');
			$(this).animate({top:'0px'});
		}
	);

	$('.imgContact2').hover(
		function(){
			$(this).css('background-image','url(images/photosY.png)');
			$(this).animate({top:'20px'});
		},
		function(){
			$(this).css('background-image','url(images/photos.png)');
			$(this).animate({top:'0px'});
		}
	);

	$('.imgContact3').hover(
		function(){
			$(this).css('background-image','url(images/mediaY.png)');
			$(this).animate({top:'20px'});
		},
		function(){
			$(this).css('background-image','url(images/media.png)');
			$(this).animate({top:'0px'});
		}
	);

	$('.imgContact0').on('click', function(){
		$('.navTicket').fadeOut();
		$('.imgKatieMain').fadeOut();
	});
	$('.imgContact1').on('click', function(){
		$('.navTicket').fadeOut();
		$('.imgKatieMain').fadeOut();
	});
	$('.imgContact2').on('click', function(){
		$('.navTicket').fadeOut();
		$('.imgKatieMain').fadeOut();
	});
	$('.imgContact3').on('click', function(){
		$('.navTicket').fadeOut();
		$('.imgKatieMain').fadeOut();
	});

	// code to test the best easing effect
	$(".start").on("click", function(){
		var $katieName0 = $('.katieName0');
		$katieName0.css("top","307px");
		//$katieName0.animate({top: "700px"},2000,easing[n]);
		$katieName0.animate({top: "700px"},2000,"easeOutQuad");
		$(".start").text("Start [" +  easing[n] + "]");
		n++;
		if(n > easing.length){
			n = 0;
		}
	});


	function foo(){

	}













});  // end class