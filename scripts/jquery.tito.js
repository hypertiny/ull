(function ( $ ) {

  $.tito = function(event_url){
    var base_url = [$.tito.base_url(), event_url].join('/');
    var url_extra = '';
    this.releases = function(release_ids, callback){
      if(typeof release_ids === 'function')
      {
        callback = release_ids;
      }
      else
      {
        if(release_ids.length > 1)
        {
          url_extra = '&release_ids=' + release_ids.join(',');
        }
        else
        {
          url_extra = '&release_id=' + release_ids[0];
        }
      }
      var url = base_url + '/releases/current.json?callback=?' + url_extra
      console.log(url)
      $.getJSON(url, null, callback)
    }
    return this;
  }

  if($.tito.dev == undefined)
  {
    $.tito.dev = false
  }

  $.tito.base_url = function() { return $.tito.dev == true ? 'http://api.tito.dev' : 'https://api.tito.io' }
 
}( jQuery ));