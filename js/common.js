$(document).ready(function(){
	//마지막 처음 요소 클래스 부여
	$("ul").find(" > li:last").addClass("last");
	$("ul").find(" > li:first").addClass("first");
	$("ol").find(" > li:last").addClass("last");

	$("table tr").find(" > th:first").addClass("first");
	$("table tr").find(" > th:last").addClass("last");
	$("table tr").find(" > td:first").addClass("first");
	$("table tr").find(" > td:last").addClass("last");

	$('.scroll_down').on('click',function(){
		event.preventDefault();
    var target = $(this).attr('href');
    var target_top = $(target).offset().top;

    $('html,body').animate({
        scrollTop : target_top
    }, 1000);

    return false;
  });
	// top button
	$(window).scroll( function(){
		if ($(window).scrollTop() > 20){
			$("#mTop").fadeIn();
		} else {
			$("#mTop").fadeOut();
		}
		var sHeight = $(window).scrollTop();
		if (sHeight > 120){
		} else {
		}
	});
	$("button#mTop").click(function(){
		$("html, body").animate({
			scrollTop : 0
			}, 600);
	});
	
	// message scroll
	$(window).bind("scroll resize", function () {
		var oriScroll = $(this).scrollTop();
		if(oriScroll > 100){
	    TweenLite.to($(".message"), 1, {y:-270,ease: Power2.easeOut});
	  } else {
			TweenLite.to($(".message"), 1, {y:0,ease: Power2.easeOut});
		}
	});


	$('.resume > div').each( function(){
			var flag = true;
			var $target = $(this);
			// set
			TweenMax.set($target, {y: -120});
			$(this).waypoint(function(){
				if(flag) { // scroll down
					TweenMax.staggerTo($('.resume > .pic'), 2, { ease: Back.easeOut.config(1.7), y: 20 });
					TweenMax.staggerTo($('.resume > .resume_list'), 3, { ease: Back.easeOut.config(1.7), y: 30 });
					flag = false;
				} else { // scroll up
					TweenMax.staggerTo($target, 1.2, { y: 0, ease: Back.easeOut.config(2) });
					flag = true;
				}
			},
			{
				offset: "103%"
			}
		);
	});

	$('.fol_list > li').each( function(){
			var folList = true;
			var $target = $(this);
			// set
			TweenMax.set($target, {y: -100});
			$(this).waypoint(function(){
				if(folList) { // scroll down
					TweenMax.staggerTo($target, 2, { ease: Back.easeOut.config(1.7), y: 20 });
					folList = false;
				} else { // scroll up
					TweenMax.staggerTo($target, 1.2, { y: 0, ease: Back.easeOut.config(2) });
					folList = true;
				}
			},
			{
				offset: "103%"
			}
		);
	});


});
