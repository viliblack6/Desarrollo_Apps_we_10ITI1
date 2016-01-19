$(document).ready(function(){
	$('.flexslider').flexslider({
		animation: "slide",
		manualControls: ".flex-control-nav li",
  		useCSS: false
	});

	// Menu scroll
	var nav = $('#menu');
	pos = nav.offset();	 
	// Esperamos al DOM
	$(window).scroll(function(){
	    if ( ($(this).scrollTop() >= pos.top)){
	        nav.addClass('fixed');
	        $(".wrapper").addClass("scrolling");
	    } else if ( ($(this).scrollTop() <= pos.top)){
	        nav.removeClass('fixed');
	        $(".wrapper").removeClass("scrolling");
	    }
	});

	$('#ir_arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$("#discover").click(function(){
		$("#sub_menu_discover").toggle();
	});

	$("#devices").click(function(){
		$("#sub_menu_devices").toggle();
	});

	$("#more").click(function(){
		$("#sub_menu_more").toggle();
	});

	$("#info_1").click(function(){
		$("#contenido_info_1").fadeIn(600);
		$("#contenido_info_2").fadeOut(100);
	});

	$("#info_2").click(function(){
		$("#contenido_info_1").fadeOut(100);
		$("#contenido_info_2").fadeIn(600);
	});
});