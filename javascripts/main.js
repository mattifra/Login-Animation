jQuery(function($) {'use strict';

	//Responsive Nav
	$('li.dropdown').find('.fa-angle-down').each(function(){
		$(this).on('click', function(){
			if( $(window).width() < 768 ) {
				$(this).parent().next().slideToggle();
			}
			return false;
		});
	});

	//Fit Vids
	if( $('#video-container').length ) {
		$("#video-container").fitVids();
	}


});




	//LOGIN - SIGNUP - RESET PASSWORD 
	

	$( document ).ready(function() {

//se clicco su login, si nasconde il blocco "favourites-signup"
		$(".nav a").click(function(){
			if ($(this).attr("data-target") === "#login_modal") {
				$(".favourites-signup").hide();
				$(".favourites-login").show();
				$(".forgot-password").hide();
			};
		})

		
		$(".login-link").click(function() {
			event.preventDefault();
		    $(".favourites-signup").hide();
		    $(".favourites-login").fadeIn([500],["easeInCubic"]).appendTo($("favourites-form"));
		});

	    $(".signup-link").click(function() {
			event.preventDefault();
		     $(".favourites-login, .forgot-password").hide();
		    $(".favourites-signup").fadeIn([500],["easeInCubic"]).appendTo($("favourites-form"));
		});

		  $(".pwd-link").click(function() {
			event.preventDefault();
		     $(".favourites-login").hide();
		    $(".forgot-password").fadeIn([500],["easeInCubic"]).appendTo($("favourites-form"));
		});

	});





//LOGIN - REGISTER ANIMATION

$( document ).ready(function() {
 
     
//variabili
	  var $loginSlid = $("#login-slider");
	  var $registerSlid = $("#register-slider");
	  var $loginBtn = $(".btn-fixed-login .btn");
	  var $registerBtn = $(".btn-fixed .btn");



//impostazioni
	   $("#main-form-slider").css("height", $registerSlid.height()+300);
	   $(".btn-fixed,.btn-fixed-login" ).css("top",$registerSlid.height());
	   $loginBtn.addClass("btn-grey");



//clicco il login button 
	    $loginBtn.click(function() {
	    	if ($(this).hasClass("btn-grey")) {
	             event.preventDefault();
	             var $newHeight = $registerSlid.height();
	             $loginSlid.css("display", "block");
	              $registerSlid.animate({
	              	"right": "-1100px"
	              }, 500, function(){/*callbacl*/});
	             $loginSlid.animate({
	              	"left": "15px"
	              }, 500, function(){
	              	$registerSlid.css("display", "none");
	              }); 
	             $(".img-login").animate({
	              	"left": "600px"
	              }, 500, function(){/*callbacl*/});
	             $registerBtn.addClass("btn-grey");
	             $loginBtn.removeClass("btn-grey");
           }; 
	  });

 //clicco il signup button
	   $registerBtn.click(function() {
	   	     if ($(this).hasClass("btn-grey")) {
	              event.preventDefault();
	              var $newHeight = $registerSlid.height();
	              $registerSlid.css("display", "block");
	              $loginSlid.animate({
	              	"left": "-1100px"
	              }, 500, function(){ });
	             $registerSlid.animate({
	              	"right": "15px"
	              }, 500, function(){
	              	$loginSlid.css("display", "none");
	              });
	             $(".img-login").animate({
	              	"left": "15px"
	              }, 500, function(){/*callbacl*/});
	              $loginBtn.addClass("btn-grey");
	              $registerBtn.removeClass("btn-grey");
	          };
       });
 


   
});







