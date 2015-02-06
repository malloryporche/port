$jQuery(document).ready(function($){
	//// BREAKPOINT VALUE SET IN CSS 'MQL'	//
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.mp_navbar').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.mp_navbar').hasClass('is-fixed')) {
		    		$('.mp_navbar').addClass('is-visible');
		    	} else {
		    		$('.mp_navbar').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.mp_navbar').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.mp_navbar').hasClass('is-fixed')) $('.mp_navbar').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.mp_primary-nav-trigger').on('click', function(){
		$('.mp_menu-icon').toggleClass('is-clicked'); 
		$('.mp_navbar').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.mp_primary-nav').hasClass('is-visible') ) {
			$('.mp_primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.mp_primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});
});


 //	CAROUSEL //
 $(.carousel)

//GOOGLE MAP//
var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);