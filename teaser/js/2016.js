jQuery(function(){
  $(document).on('click', '[data-behavior=watch]', function(){
    $('#buttons').fadeOut(function(){
      $('#border').animate({maxWidth: ($(window).width() - 20)}, function(){
        newHeight = ($(window).height() - $(window).width() / 1.77) / 2 / 3
        $('.vertical_space_3').animate({height: newHeight})
        $('.box-frame-2').animate({height: ($(window).width() / 1.77) - 10, maxHeight: ($(window).width() / 1.77) - 10})
        $('#border').animate({height: $(window).width() / 1.77}, function(){
          $('#video').tab('show')
          video = Wistia.api('8axqrasvy5')
          video.play()
          video.bind("end", function(){
            document.location.href = "https://ti.to/úll/2016"
          })
        })
      })
    })
    return false
  })
})