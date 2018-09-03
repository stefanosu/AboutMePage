$(document).ready(function() {

var navOffset = $("nav").offset().top;


$(window).scroll(function() {
var scrollPos = $(window).scrollTop(); 

}

});

//fade out using jquery here 
$("button").click(function(){
    $("li").fadeOut(slow);
});