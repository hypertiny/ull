jQuery(function(){
  var setSprinkleOpacity = function(){
    var threshold     = parseInt($(window).height() / 2);
    var topThreshold  = $(document).height() - $(window).height() - threshold;
    var opacity;
    if($(document).scrollTop() < threshold)
    {
      opacity = 1 - parseInt($(document).scrollTop() / threshold * 100) / 100
    }
    else if($(document).scrollTop() >= topThreshold)
    {
      var distance = $(document).scrollTop() - topThreshold
      opacity = parseInt(distance / threshold * 100) / 100
    }
    else
    {
      opacity = 0;
    }
    $('div.sprinkles').css('opacity', opacity)
  }
  $(document).scroll(setSprinkleOpacity);
  setSprinkleOpacity();
})