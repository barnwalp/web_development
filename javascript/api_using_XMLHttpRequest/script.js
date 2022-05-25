// Populating HTML DOM using javascript
const app = document.getElementById('root');
// Creating img element and setting it's src
const logo = document.createElement('img');
logo.src = 'https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png';
// Creating a container class div element
const container = document.createElement('div');
container.setAttribute('class', 'container');

// Append the logo and container div to the app root
app.appendChild(logo);
app.appendChild(container);

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
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = "Gah, It's not working";
  } else {
    // console.log(request.response);
    // Start working with the JSON data
    let data = JSON.parse(request.response);
    // console.log(data);
    data.forEach(movie => {
      // Create a div with card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      // Create an h1 and set the text content to the film's title
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      // Create a p and set the textContent
      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = movie.description;
      container.appendChild(card)
      card.appendChild(h1);
      card.appendChild(p);
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
