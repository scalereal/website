$(document).ready(function(){

  // Homepage Projects and Testimonial sliders
	$('.owl-one, .owl-two').owlCarousel({
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

  // Hamburger icons toggle for mobile view
  var $hamburger = $('.hamburger');
  $hamburger.on('click', function(e) {
    $hamburger.toggleClass('is-active');
  });

  var current = location.pathname;
  $('.navbar-nav .nav-link').each(function(index){
      var $this = $(this);
      // if the current path is like this link, make it active
      if((current === '/' && index === 0 )||  ( current !== '/' && ($this.attr('href') + '/').indexOf(current) !== -1)) {
        $this.addClass('active');
      }
  })
});