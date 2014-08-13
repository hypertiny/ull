jQuery.fn.shake = function(amount){
  $(this).velocity('callout.shake')
}

jQuery(function(){
  var callback
  $('.register-interest-form').submit(function(){
    name  = $('#register-name').val()
    email = $('#register-email').val()
    if($.trim(name) != '' && $.trim(email) != '')
    {
      url = ["https://ti.to/ull/2014/interested_users/subscribe.json?&interested_user[email]=", email , "&interested_user[name]=", name, "&callback=?"].join('')
      $.getJSON(url, null, function(data){})
      width = $('.register-interest-form').width()
      height = $('.register-interest-form').height()
      $('.register-interest-form')
        .velocity({rotateY: 10, rotateX: 0})
        .velocity({x: 1900}, 200, 'linear')
        .velocity({opacity: 0, x: 3000}, 100, 'linear')
        .promise().done(function(){
        $('.register-interest-form').html(['<h2>', 'Thanks ', name.split(' ')[0], ', <br> we’ll be in touch.', '</h2>'].join(''))
        $('.register-interest-form').velocity({
          x: 0, y: 0, rotateY: 0, rotateX: 0, width: width, height: height}, 300, 'linear')
          .velocity({opacity: 1}, 300, 'linear')
      })
    }
    else
    {
      $('.register-interest-form').shake()
    }
    return false;
  })
})