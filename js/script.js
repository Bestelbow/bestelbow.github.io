$( document ).ready(function(){

	/* product */
	var swipereElbow90 = new Swiper('.swiper-container90', {
		spaceBetween: 0,
		centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
	    	el: '.swiper-pagination90',
	    	clickable: true,
		},
	});
	var swipereElbow45 = new Swiper('.swiper-container45', {
	  spaceBetween: 0,
	  centeredSlides: true,
	  loop: true,
	  autoplay: {
	    delay: 2500,
	    disableOnInteraction: false,
	  },
	  pagination: {
	    el: '.swiper-pagination45',
	    clickable: true,
	  },
	});

	


	var $tab = $('#product .tab a');

	$('#product .tab a').click(function(){
		$tab.removeClass('active');
		$(this).addClass('active');
		
		$('#'+$(this).attr('data-attr')).addClass('active').siblings('.productContent').removeClass('active');
	});

	$('#product .productTab a ').click(function() {

		$('#product .productContent.active .productTab a ').removeClass('active');
		$(this).addClass('active');

		$('.'+$(this).attr('data-attr')).show().siblings('td').hide();
	});

	/* Home */
	var Asideswiper = new Swiper('.aside .swiper-container', {
	      spaceBetween: 0,
	      centeredSlides: true,
	      autoplay: {
	        delay: 2500,
	        disableOnInteraction: false,
	      },
	      pagination: {
	        el: '.aside .swiper-pagination',
	        clickable: true,
	      },
	    });

	    var Facilitiesswiper = new Swiper('#facilities .swiper-container', {
	      slidesPerView: 3,
	      spaceBetween: 0,
	      freeMode: true,
	      pagination: {
	        el: '#facilities .swiper-pagination',
	        clickable: true,
	      },
	    });

	    
});