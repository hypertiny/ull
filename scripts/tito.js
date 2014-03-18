jQuery(function(){
  doT.templateSettings = {
    evaluate:    /\%\{([\s\S]+?)\%\}/g,
    interpolate: /\%\{=([\s\S]+?)\%\}/g,
    encode:      /\%\{!([\s\S]+?)\%\}/g,
    use:         /\%\{#([\s\S]+?)\%\}/g,
    define:      /\%\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\%\}/g,
    conditional: /\%\{\?(\?)?\s*([\s\S]*?)\s*\%\}/g,
    iterate:     /\%\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\%\})/g,
    varname: 'it',
    strip: true,
    append: true,
    selfcontained: false
  };

  $.tito.dev = true
  template = doT.template($('#ticket-template').html())
  $.tito('ull/2014').releases(function(releases){
    on_sale = false;
    for(var i = 0; i < releases.length; i++)
    {
      var release = releases[i];
      $('ul#ull-tickets').append(template(release))
      if(release.status == 'current')
      {
        on_sale = true;
      }
    }
    if(on_sale === false)
    {
      $("#purchase-button").hide()
    }
  })
})