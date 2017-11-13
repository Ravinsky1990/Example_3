$('.sl').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	arrows: false,
	slidesToShow: 3,
	arrows: true,
	senterMode: true,
	responsive:[
		{
			breakpoint: 768,
			settings:{
				slidesToShow: 2
			}

		},
		{
			breakpoint: 1024,
			settings:{
				slidesToShow: 2,
				
			}

		},
		{
			breakpoint: 476,
			settings:{
				slidesToShow: 1,
				centerMode: true
				
			}

		},
		{
			breakpoint: 425,
			settings:{
				slidesToShow: 1,
				
			}

		},
		{
			breakpoint: 375,
			settings:{
				slidesToShow: 1,
				
			}

		},
		{
			breakpoint: 320,
			settings:{
				slidesToShow: 1,
				
			}

		}
	],
	prevArrow: $('.arrow_pre'),
	nextArrow: $('.arrow_next')
});
jQuery(document).ready(function(){

    jQuery('.as').click(function() {
        var scr = $(".bloom").offset();
        $('body,html').animate({
            scrollTop: scr.top,
        }, 1500);
        $('div.fadein_menu ul').toggleClass('fadein_ul');

    });
    jQuery('.serv').click(function() {
		var scr = $(".services").offset();
        $('body,html').animate({
            scrollTop: scr.top,
        }, 1500);
        $('div.fadein_menu ul').toggleClass('fadein_ul');

    });
    jQuery('.port').click(function() {
		var scr = $(".portfolio").offset();
        $('body,html').animate({
            scrollTop: scr.top,
        }, 1500);
        $('div.fadein_menu ul').toggleClass('fadein_ul');

    });
    jQuery('.tm').click(function() {
		var scr = $(".team").offset();
        $('body,html').animate({
            scrollTop: scr.top,
        }, 1500);
        $('div.fadein_menu ul').toggleClass('fadein_ul');

    });
    jQuery('.bg').click(function() {
		var scr = $(".blog").offset();
        $('body,html').animate({
            scrollTop: scr.top,
        }, 1500);
        $('div.fadein_menu ul').toggleClass('fadein_ul');

    });
    jQuery('.con').click(function() {
		var scr = $(".contact").offset();
        $('body,html').animate({
            scrollTop: scr.top,
        }, 1500);
        $('div.fadein_menu ul').toggleClass('fadein_ul');

    });

});

$(window).on('scroll',function(){
	if ($(window).scrollTop()>'200') {
		$('div.fadein_menu').css({
			display:'block',
			position:'fixed',
			'z-index':'99000'
		});
	}
	else{
		$('div.fadein_menu').css({
			display:'none',
		});
	}
});
$('div.fade_marker span').on('click', function(){
  $('div.fadein_menu ul').toggleClass('fadein_ul');
});
