// JavaScript Document

 function handleScrolling(){
      var speed = 700;
      var easeMethod = 'easeInOutQuart'; 
      $('.scroll').click(function (event) {
        var amountToScroll = ( $(this.hash).offset().top );
        event.preventDefault();
        $('html,body').animate( {scrollTop: amountToScroll }, speed, easeMethod );
        $('ul').find('a').removeClass('selected');
        $(this).addClass('selected');
        return false
      });
      $('.backToTop').click(function (event){
        event.preventDefault();
        $('html,body').animate( {scrollTop: 0 }, speed, easeMethod );
      });
    }
	
$(function(){
 var searchString = [
		"Android",
		"IOS",
		"Swift",
		"Widgets",
		"Mobile Jquery UI",
		"Widgets",
		"Firebase",
		"Widgets"
		];
	$("#inputlg").autocomplete({
		source: searchString
		});
		
 });

      function resizeFrame(){
        var h = $(window).height();
        $('section').css('min-height',h);
        $('.windowHeight').html(h);
        var activeSection = $('.myNav a.selected').prop('hash');
        var scrollAmount = $(activeSection).offset().top;
        $('html,body').stop(true, true).delay(1000).animate( {scrollTop: scrollAmount }, 700, 'easeOutQuart');
      }
    
	$(document).ready(function(){
		
      handleScrolling(); 
      jQuery.event.add(window, "resize", resizeFrame);
      resizeFrame(); // call the resizeFrame function on load
	 
    });