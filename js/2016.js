jQuery(function(){
  $(document).on('click', '[data-behavior=watch]', function(){
    $('#buttons').fadeOut(function(){
      $('.vertical_space_3').animate({height: 3})
      $('#border').animate({maxWidth: ($(window).width() - 20)}, function(){
        $('#video').tab('show')
        Wistia.api('8axqrasvy5').play()
      })
    })
    return false
  })
})