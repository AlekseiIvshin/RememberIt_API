const restify = require('restify');
const routes = require('./routes');
const corsMiddleware = require('restify-cors-middleware');

const cors = corsMiddleware({  
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"]
});

const port = 3000;

const server = restify.createServer();

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser({
    requestBodyOnGet: true
}));
server.pre(cors.preflight);  
server.use(cors.actual);  

routes.init(server);

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});