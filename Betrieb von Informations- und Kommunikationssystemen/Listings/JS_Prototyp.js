google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
  var streetViewOptions = {
    zoom: 1,
    panoProvider:  getCustomPanorama,
    pano:  "1",
    mode: 'html5',
    pov : {
      heading : 0,
      pitch : 0,
      zoom : 0
    }
  };
  // Create a StreetView object.
  var streetViewDiv = document.getElementById('map-canvas');
  streetViewDiv.style.fontSize = "15px";
  streetView = new google.maps.StreetViewPanorama(streetViewDiv, streetViewOptions);

  google.maps.event.addListener(streetView, "links_changed", createCustomLink);
}

function getCustomPanoramaTileUrl(panoID, zoom, tileX, tileY) {
  return "path//to/panorama";
}

function getCustomPanorama(panoID) {
  var streetViewPanoramaData = {
    links: [],
    copyright: 'Imagery (c) VCL',
    location: {
      pano: panoJson.id,
      description: panoJson.description
    },
    tiles: {
        tileSize: new google.maps.Size(2048, 1024),
        worldSize: new google.maps.Size(2048, 1024),
        getTileUrl: getCustomPanoramaTileUrl
     }
  };
  return streetViewPanoramaData;
}

function createCustomLink() {
  var links = streetView.getLinks();
  var panoID = streetView.getPano();

  links.push({
    pano: "1",
    heading: 0
  });
}