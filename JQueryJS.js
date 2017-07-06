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
$("#ghosting").hover(function(){
  $(this).remove();
}, function() {
  $(this).add();
}
);

// question 7
$("#resize").mousedown(function(){
  $(event.target).css("width", "400px")
})

$("#reset").click(function(){
  $("li").removeClass("selected");
  $("img:first").attr("src", "images/panic.jpeg")
})

// question 8
