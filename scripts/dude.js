$(document).ready(function() {

  var frame = 41.666667;
  var timer;

  $( ".register-name, .register-email" ).one("keypress", function() {
    $(".volunteer-image").attr("src", "/images/dude/02-dude.gif");
    setTimeout(function() {
      $(".volunteer-image").attr("src", "/images/dude/03-dude.gif")
    }, frame*3);
  });

  $( ".register-name, .register-email" ).on("keyup", function() {
    clearInterval(timer);
    timer = setTimeout(function() { 
      setTimeout(function() {
        $(".volunteer-image").attr("src", "/images/dude/04-dude.gif");
        setTimeout(function() {
          $(".volunteer-image").attr("src", "/images/dude/01-dude.gif")
        }, frame*4);
      }, frame*12);
    }, 300);
  });
});