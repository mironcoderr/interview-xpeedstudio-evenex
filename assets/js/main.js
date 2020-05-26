
//for navbar active when click
$(".nav-item").on("click", function(){
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
});



//for about part number count
$('.counter').counterUp({
    delay: 100,
    time: 1200
});


//for banner video when click
$(document).ready(function(){
  $('.venobox').venobox(); 
});