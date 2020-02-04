var restify = require('restify');
var routes = require('./routes');

const port = 3000;

var server = restify.createServer();

routes.init(server);

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});