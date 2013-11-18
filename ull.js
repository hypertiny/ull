#include "../extendables/extendables.jsx";

// namespaces, so there are no variables all over the place
var ui = require("ui");
var http = require("http");

// var doc = app.documents[0];
// var minSize = 4;
// var stepSize = 0.5;

// var document = app.documents.item(0); // active document
var allTextFrames = toArray(document.textFrames);

// reply = "";
// conn = new Socket; // access Adobe’s home page
// if (conn.open ("raw.github.com:443"))
// {
//   // send a HTTP GET request
//   conn.write ("GET /hypertiny/ull/indesign-2014/labels HTTP/1.0\n" + "Host: raw.github.com\n" + "Accept: */*\n\n");
//   // and read the server’s reply
//   reply = conn.read(999999);
//   conn.close();

//   var parts = reply.split("\n\n")
//   result = parts.pop()
//   alert(result)
// }
base_url = 'https://raw.github.com/hypertiny/ull/indesign-2014/'

get(base_url + 'labels', function(result){
  if(result)
  {
    labels = result.split("\n")
    for(var i=0; i< labels.length; i++)
    {
      var label = labels[i];
      get(base_url + label, function(content, url){
        fill(label, content)
      })
    }
  }
})

function get(url, callback)
{
  var myAppleScript = 'do shell script "curl ' + url + '"';
  var result = app.doScript(myAppleScript, ScriptLanguage.applescriptLanguage);
  if(typeof callback === 'function')
  {
    callback(result, url)
  }
}

function fill(label, value, pointSize){
  textFrames = selectWhere(label, "label", allTextFrames);
  for (var p = 0; p < textFrames.length; p++)
  {
    textFrames[p].parentStory.pointSize = pointSize;
    textFrames[p].contents = value;
  }
}

function selectWhere(value, key, array){
    var i = array.length; var t; var filtered = [];
    while(i--){
            t = array[i];
            if(t && t[key] == value){
                filtered.push(t);
            }
    }
    return filtered;
}

function toArray(objects){
    var i = objects.length; var array = [];
    while(i--){
            array.push(objects[i]);
    }
    return array;
}