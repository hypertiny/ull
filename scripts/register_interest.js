jQuery.fn.shake = function(amount){
  $(this).transition({perspective: (amount || 350), duration: 0})
    .transition({rotateY:     -10, duration: 100})
    .transition({rotateY:     10,  duration: 100})
    .transition({rotateY:     -10, duration: 100})
    .transition({rotateY:     10,  duration: 100})
    .transition({rotateY:     0})
}

jQuery(function(){
  var callback
  $('.register-interest-form').submit(function(){
    name  = $('#register-name').val()
    email = $('#register-email').val()
    if($.trim(name) != '' && $.trim(email) != '')
    {
      url = ["https://ti.to/ull/2014/survey_responses/join.json?survey_id=pahrv7bccp8celaaufzk4fa&survey_response[answers][2641][response]=", email , "&survey_response[answers][2640][response]=", name, "&callback=?"].join('')
      $.getJSON(url, null, function(data){})
      width = $('.register-interest-form').width()
      height = $('.register-interest-form').height()
      $('.register-interest-form')
        .transition({perspective: 100, transformOrigin: '-100px 50px'}, 0)
        .transition({rotateY: 10, rotateX: 0})
        .transition({x: 1900}, 200, 'linear')
        .transition({opacity: 0, x: 3000}, 100, 'linear')
        .promise().done(function(){
        $('.register-interest-form').html(['<h2>', 'Thanks ', name.split(' ')[0], ', <br> we’ll be in touch.', '</h2>'].join(''))
        $('.register-interest-form').transition({
          x: 0, y: 0, rotateY: 0, rotateX: 0, width: width, height: height}, 300, 'linear')
          .transition({opacity: 1}, 300, 'linear')
      })
    }
    else
    {
      $('.register-interest-form').shake()
    }
    return false;
  })
})