var doc = app.documents[0];
var minSize = 4;
var stepSize = 0.5;

var document = app.documents.item(0); // active document
var allTextFrames = toArray(document.textFrames);

reference = prompt("Enter ticket reference", 'OCPF-1')

reply = "";
conn = new Socket; // access Adobe’s home page
if (conn.open ("api.thesummit.me:80"))
{
  // send a HTTP GET request
  conn.write ("GET /tito/get_identifier?ticket_reference=" + reference + "&security_code=i8ewL21T HTTP/1.0\n" + "Host: api.thesummit.me\n" + "Accept: */*\n\n");
  // and read the server’s reply
  reply = conn.read(999999);
  conn.close();

  var parts = reply.split("\n\n")
  result = parts.pop()

}

//var myAppleScript = 'do shell script "curl -u PNpxxX7ywxrWSb14Yfus:x \'https://api.thesummit.me/tito/get_identifier?ticket_reference=' + reference +'&security_code=i8ewL21T\'"';
//var result = app.doScript(myAppleScript, ScriptLanguage.applescriptLanguage);

if(result)
{
  eval('json = ' + result + ';')
  first_name = json.first_name
  last_name = json.last_name
  identifier = json.identifier
  company = json.company;

  if(first_name)
  {
    fill('first_name', first_name, 50);
  }
  else
  {
    fill('first_name', prompt("Enter Value for First Name", ""), 50);
  }

  if(last_name)
  {
    fill('last_name', last_name, 23);
  }
  else
  {
    fill('last_name', prompt("Enter Value for Last Name", ""), 23);
  }

  if(company)
  {
    fill('company', company, 26);
  }
  else
  {
    fill('company', prompt("Enter Value for Company", ""), 26);
  }

  if(identifier)
  {
    fill('three-character-reference', identifier, 45);
  }
  else
  {
    fill('three-character-reference', prompt("Enter Value for Identifier", ""), 45);
  }
  
  txtShrink();
}

function fill(label, value, pointSize){
  textFrames = selectWhere(label, "label", allTextFrames);
  for (var p = 0; p < textFrames.length; p++)
  {
    textFrames[p].parentStory.pointSize = pointSize;
    textFrames[p].contents = value;
  }
}

function get_answer(label, array){
  for (var p = 0; p < array.length; p++)
  {
    var item = array[p];
    if(item.question.title == label)
    {
      return item;
    }
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
 
function txtShrink(){
  for (var p = 0; p < doc.pages.length; p++)
  {
    var frameCount = doc.pages[p].textFrames.count();
    for (var i = 0; i < frameCount; i++){
       myFrame = doc.pages[p].textFrames[i];
       while (myFrame.overflows && myFrame.parentStory.pointSize > minSize){
            myFrame.parentStory.pointSize -= stepSize;
       }
    }
  }
}