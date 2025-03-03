//Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var server = http.createServer(function(req, res) {
  var page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  res.writeHead(200, {"Content-Type": "text/plain"});
  if (page == '/') {
    res.write('Welcome to the homepage.');
  } else if (page == '/otherpage') {
    res.write('Welcome to the other page.');
  } else if (page == '/test') {
    if ('firstname' in params && 'lastname' in params) {
      res.write('Your name is ' + params['firstname'] + ' ' + params['lastname']);
    } else {
      res.write('You do have a first name and a last name.');
    }
  }
  res.end();
});
server.listen(8080);