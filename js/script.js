$(document).ready(function(){

	$('.owl-one').owlCarousel({
		nav: false,
    loop: true,
    margin: 0,
    dots: true,
    slideBy: 1,
    autoplay: false,
    autoplayHoverPause: true,
    slideTransition: 'linear',
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
      },
      767:{
        items:1,
      },
      1199:{
        items:1,
      }
    }
	});

  $('.owl-two').owlCarousel({
  	nav: false,
    loop: true,
    margin: 0,
    dots: true,
    slideBy: 1,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        autoHeight: true,
        autoplay: false
      },
      767:{
        items:1,
      },
      1199:{
        items:1,
      }
    }
  });

});