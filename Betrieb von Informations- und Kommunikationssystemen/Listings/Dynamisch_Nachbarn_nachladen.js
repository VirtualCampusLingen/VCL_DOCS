function createCustomLink() {
  var links = streetView.getLinks();
  var panoID = streetView.getPano();
  //get panoJson
  var panoJson = getPanoJson(panoID);
  //detect neighbors
  var neighbours = panoJson.neighbours;
  for(key in neighbours){
    if (neighbours.hasOwnProperty(key)){
      var obj = neighbours[key];
      links.push({
        pano: obj.neighbour_id,
        heading: obj.heading
      });
    }
  }
}

function getPanoJson(panoID){
  if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
    var xhr = new XMLHttpRequest();
  }else{// code for IE6, IE5
    var xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("GET", "http://vcl.example.com/api/api_test.php?id="+panoID, false);
  xhr.send();
  var response = xhr.responseText;
  var json = JSON.parse(response);
  pano = json["Panoid"];
  return pano;
}