// question 1
$("#greeting").text("Hello World!")


// question 2
$("li").css('backgroundColor', 'yellow')


// question 3
$('#greeting').append("<img src='http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif'>")

// question 4
$("li").mousedown(function(){
  $("li").removeClass("selected");
    $(event.target).addClass("selected");
})

// question 5
$("li").mousedown(function(){
  $("img[alt = 'beer']").attr("src", "images/" + $(event.target).html() + ".jpeg")
})

// question 6
$('#ghosting').mouseenter(function() {
 $("#ghosting").remove();
});

// question 7
$("#resize").mousedown(function(){
  $(event.target).css("width", "400px")
})

$("#reset").click(function(){
  $("li").removeClass("selected");
  $("img").attr("src", "images/panic.jpeg")
})

// question 8
$(document).keypress(function(e){
  if(e.keyCode >= 48 && e.keyCode <= 57){
alert("I HATE NUMBERZZZ!")
  }
})

// question 9
// BONUS: If someone types the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code),
// the page alerts "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"
// UUDDLRLRBA
