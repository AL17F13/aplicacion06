// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
$ ('#btnvibrar') .on ('top' , function () { 
  navigator .vibrate (1000);
 });//  tap a btnvibrar
 $ ('btnbeep') .on ('tap' , function () {
	 navigator.notification.beep(1);
	 
 }); // tap de beep 
 
}); 
});

