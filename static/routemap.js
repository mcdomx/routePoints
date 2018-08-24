// ########################  begin DOMContentLoaded ########################
document.addEventListener('DOMContentLoaded', () => {
  // wait till page loads before setting up javascript elements

});
// ########################  end DOMContentLoaded ########################

// initMap() run by google api call in HTML
// got guidance from:
// https://stackoverflow.com/questions/15829048/best-way-to-import-coordinates-from-gpx-file-and-display-using-google-maps-api#15830122
// function will get lat and lon coordinates from server.  server parses file and
// returns a dictionary of points which are added to the map
function initMap() {

  // file_element = document.getElementById('gpxfile');
  // data.append('gpxfile', file_element.files[0], file_element.files[0].name )
  //
  //  const get_gpx = new XMLHttpRequest();
  //  get_gpx.open('POST', 'index');
  //  // get_gpx.setRequestHeader("X-CSRFToken", CSRF_TOKEN);
  //  get_gpx.onload = () => {
  //    //returns GPX file points in a dictionary
  //    const response = JSON.parse(get_gpx.responseText);
  //    var route_points = [];
  //    var map_bounds = new google.maps.LatLngBounds();
  //
  //    // get the track points in the XML file and extract the lat an lon coordinates
  //    // add the coordinates to the a new g_maps coordinate point
  //    // then add the g_maps coordinate point to the route_points list
  //    for (p in response) {
  //
  //      var point = new google.maps.LatLng(response[p].lat, response[p].lon);
  //      route_points.push(point);
  //      map_bounds.extend(point);
  //     }
  //
  //     // create a polygon of the route
  //     var route_drawing = new google.maps.Polyline({
  //          path: route_points,
  //          strokeColor: "red",
  //     });
  //
  //     // create new map object
  //     var mapOptions = { mapTypeId: 'terrain' };
  //     var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  //
  //     // set the polygon on the map and set the bounds to match
  //     route_drawing.setMap(map);
  //     map.fitBounds(map_bounds);
  //  } // end on_load()
  //
  //  // get routePoints.JSON file
  //
  //
  //  // Add route id to request sent to server
  //  const data = new FormData();
  //  rpFile = File("routePoints.JSON")
  //  data.append('routePoints', rpFile.files[0], rpFile.files[0].name);
  //
  //  // Send request
  //  get_gpx.send(data);
  //  return false; // avoid sending the form and creating an HTTP POST request

} // end initMap()
