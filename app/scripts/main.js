jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.mp_header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.mp_header').hasClass('is-fixed')) {
		    		$('.mp_header').addClass('is-visible');
		    	} else {
		    		$('.mp_header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.mp_header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.mp_header').hasClass('is-fixed')) $('.mp_header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.mp_primary-nav-trigger').on('click', function(){
		$('.mp_menu-icon').toggleClass('is-clicked'); 
		$('.mp_header').toggleClass('menu-is-open');
		
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

//  DL Resume  //
 $(document).ready(function(){

     $("#DL_resume").click(function() {
          $("body").append("<img src='../imgs/MalloryPorcheBurke.jpg' class='printresume' >");
          window.print();
     });

});