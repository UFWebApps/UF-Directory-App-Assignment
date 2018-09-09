var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
   
   if(request.method === 'GET'){
	  if(parsedUrl.path === '/listings'){
		response.writeHead(200, { 'Content-Type': 'Application/JSON'});
		response.end(JSON.stringify(listingData));  
		}else{
			response.writeHead(404);
			response.end('Bad gateway error');
			}
   }
  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};

fs.readFile('listings.json', 'utf8', function(err, data) {
	/*if (err){
		throw err;
	}*/
	
	listingData = JSON.parse(data);
	server = http.createServer(requestHandler);
	server.listen(port);
	console.log("Server is listening");
		
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
});
