
function respond(req, res, next) {
  res.send('Echo: ' + req.params.message);
  next();
}

const init = (server) => {
  server.get('/echo/:message', respond);
}

module.exports = { init }