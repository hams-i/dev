$(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 150) {
      $(".up-button").fadeIn(500);
      } else{
        $(".up-button").fadeOut(500);
      }
    });
    $(".up-button").click(function(){
         $("html, body").animate({scrollTop: "0"}, 500)
    });
    if ($(this).scrollTop() > 400) {
      $(".up-button").fadeIn(500);
      } else{
        $(".up-button").fadeOut(500);
      };
  });