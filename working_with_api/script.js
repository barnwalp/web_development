// Create a new XMLHttpRequest object
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

// Send the request over the network
request.send();

// This will be called after the response is received
request.onload = function() {
  if (request.status !=200) {
    console.log(`Error ${request.status}: ${request.statusText}`);
  } else {
    // console.log(request.response);
    // Start working with the JSON data
    let data = JSON.parse(request.response);
    // console.log(data);
    data.forEach(movie => {
      console.log(movie.title);
    })
  }
}

// Triggers periodically while the response is being downloaded,
// reports how much been downloaded
request.onprogress = function(event) {
  // event.loaded - how many bytes downloaded
  // event.lengthComputable = true if the server sent Content-Length header
  // event.total - total number of bytes (if lengthComputable)
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`)
  } else {
    console.log(`Received ${event.loaded} bytes`);
  }
}

// When the request could not be made. eg. network down or invalid url
request.onerror = function() {
  console.log('Request failed');
}