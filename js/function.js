// JavaScript Document
var $ = jQuery;


$(document).ready(function() {

	// Page scrolling
	$(function() {
	    $('a').bind('click',function(event){
	        var $anchor = $(this);
	 
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top - 100
	        }, 1500,'easeInOutExpo', function() {
	       
		        window.location.hash = $anchor.html();
				//history.go(window.location);
	        
	        });
	        
	        event.preventDefault();
	        
	    });
	});
	
	
	// Sticky Nav
	$(window).scroll(function(e) {
	    var nav_anchor = $(".nav_anchor").offset().top;
	    
	    if ($(this).scrollTop() >= nav_anchor && $('.nav').css('position') != 'fixed') 
	    {    
	        $('.nav').css({
	            'position': 'fixed',
	            'top': '0px'
	        });

	        $('.nav_anchor').css('height', '100px');
	    } 
	    else if ($(this).scrollTop() < nav_anchor && $('.nav').css('position') != 'relative') 
	    {   
	        
	        $('.nav_anchor').css('height', '0px');
	        
	        $('.nav').css({
	            'position': 'relative'
	        });
	    }
	});

});