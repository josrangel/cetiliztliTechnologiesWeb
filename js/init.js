(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function esconderMenu(){
	var menu = document.getElementById("nav-mobile");
	var sidenavOverlay = document.getElementsByClassName("sidenav-overlay");
	menu.style.transform = "translateX(-105%)";
	sidenavOverlay[0].style.display = "none";
	$('.sidenav').sidenav();
}