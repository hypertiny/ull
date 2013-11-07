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

  template = doT.template($('#ticket-template').html())
  $.tito.dev = true
  releases = ['ddhbqe7j2oy','pcn-apvtj5i','cm5a3ccvkii']
  $.tito('ull/2014').releases(function(releases){
    for(var i = 0; i < releases.length; i++)
    {
      var release = releases[i];
      $('ul#ull-tickets').append(template(release))
      console.log(release.title, release.description)
    }
  })
})