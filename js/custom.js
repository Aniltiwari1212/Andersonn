// Header menu js //
	$(document).ready(function() {
		$(function($) {
		  let url = window.location.href;
		  $('.header_sec .navbar .navbar-nav > li > a').each(function() {
			if (this.href === url) {
			  $(this).closest('li').addClass('active');
			}
		  });
		});
	});

	$('.header_sec .navbar .dropdown > .dropdown-toggle').click(function () {
		window.location = $(this).attr('href');
	});
// Sticky-Header js //
	$(window).scroll(function(){
		if ($(this).scrollTop() > 80) {
		   $('.header_sec').addClass('header_sticky');
		} else {
		   $('.header_sec').removeClass('header_sticky');
		}
	});
// owl-carousel js
$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.serviceSlide').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:4000,
		margin:10,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			}
		}
	});

	$('.weatherSlide').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:5000,
		margin:10,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			1024:{
				items:4,
				loop:false,
				margin:18
			}
		}
	});
	
	$('.logo_award').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:2
			},
			768:{
				items:4
			},
			1024:{
				items:5,
				loop:false,
				margin:40
			}
		}
	});

	$('.logosAwards').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:2
			},
			768:{
				items:4
			},
			1024:{
				items:5,
				loop:false,
				margin:50
			}
		}
	});
	$('.reviewSlide2').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:5000,
		margin:30,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			}
		}
	});
});

$(document).ready(function(){
	$(".plus_icon").click(function(){
	  $(this).siblings(".header_sec .dropdown-menu").slideToggle("slow");
	  $(this).parents(".header_sec .dropdown").siblings(".header_sec .dropdown").children(".header_sec .dropdown .dropdown-menu").slideUp("slow");
	});
});


//Video Modal js
$('.btn-close').click(function() {
	$('#video').attr('src', ''); 
 });
 $(window).click(function() {
	$('#video').attr('src', ''); 
 });

$(document).ready(function() {
	// Gets the video src from the data-src on each button
	var $videoSrc;  
	$('.video-btn').click(function() {
		$videoSrc = $(this).data( "src" );
	});
	console.log($videoSrc);
	// when the modal is opened autoplay it  
	$('#myModal').on('shown.bs.modal', function (e) {
	// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
	$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
	})
	// stop playing the youtube video when I close the modal
	$('#myModal').on('hide.bs.modal', function (e) {
		// a poor man's stop video
		$("#video").attr('src',$videoSrc); 
	}) 
	// document ready  
});

AOS.init();

// Product slider
var slider = new Swiper ('.gallery-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var thumbs = new Swiper ('.gallery-thumbs', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
});

//
slider.controller.control = thumbs;
thumbs.controller.control = slider;