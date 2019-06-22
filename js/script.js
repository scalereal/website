$(document).ready(function(){

	$('.owl-one').owlCarousel({
		nav: false,
    loop: true,
    margin: 0,
    dots: true,
    slideBy: 1,
    autoplay: true,
    autoplayTimeout:15000,
    autoplaySpeed: 15000,
    autoplayHoverPause: true,
    animateOut: 'slideOutLeft',
    animateIn: 'slideInRight',
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
    autoplay: true,
    autoplayTimeout:15000,
    autoplayHoverPause: true,
    animateOut: 'slideOutLeft',
    animateIn: 'slideInRight',
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        autoHeight: false
      },
      767:{
        items:1,
      },
      1199:{
        items:1,
      }
    }
  });

  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
  });

  // $(document).on('click',function(){
  //   $('.collapse').collapse('hide');
  // })

});