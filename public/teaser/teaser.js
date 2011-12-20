$(document).ready( function(){
  $("#logo").click(function () {
    $("#easterEgg").slideToggle();
  });
  
  $('#email-submit').submit(function(e){
    var email = $('input[type=email]').val()
    if($.trim(email) != '')
    {
      $('#main').addClass('flip')
      $('span#email-address').text(email)
      var form = $(this)
      $.post(form.attr('action'), form.serialize(), function(){
        $('input[type=email]').val('')
      })
    }
    else{
      alert('Please add your email address.')
    }
    e.preventDefault()
  })
  
  $('#cool').click(function(e){
    $('#main').removeClass('flip')
    e.preventDefault()
  })
});