jQuery(function(){
  $(document).on('click', '[data-behavior=watch]', function(){
    $('#buttons').fadeOut(function(){
      $('#border').animate({maxWidth: ($(window).width() - 20)}, function(){
        $('.vertical_space_3').animate({height: 5})
        $('#border').animate({height: $(window).height() - 30}, function(){
          $('#video').tab('show')
          Wistia.api('8axqrasvy5').play()
        })
      })
    })
    return false
  })
})