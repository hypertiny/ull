$(document).ready(function() {
  $( ".register-name, .register-email" ).keypress(function() {
    $(".volunteer-image").attr("src", "/images/dude/02-dude.gif");
    setTimeout(function() {
      $(".volunteer-image").attr("src", "/images/dude/03-dude.gif")
    }, 125);
  });
  $( ".register-name, .register-email" ).keyup(function() {
    $(".volunteer-image").attr("src", "/images/dude/04-dude.gif");
    setTimeout(function() {
      $(".volunteer-image").attr("src", "/images/dude/01-dude.gif")
    }, 250);
  });
});