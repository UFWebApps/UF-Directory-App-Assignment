var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url).pathname;

  if( parsedUrl == '/listings' ) {
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(JSON.stringify(listingData));
      response.end();
  }
  else {
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.write('Bad gateway error');
      response.end();
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  if (err) throw err;
  listingData = JSON.parse(data);

});
server = http.createServer(requestHandler)
server.listen(port);
console.log("Server started");