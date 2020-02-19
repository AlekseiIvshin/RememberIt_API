const { getUser } = require('../middlewares/authentication');
const { createUser } = require('../controllers/users');

function respond(req, res, next) {
  res.send('Echo: ' + req.params.message);
  next();
}

const init = (server) => {
  server.get('/echo/:message', respond);
  server.get('/echo/user/:name', getUser, respond);
  server.post('/api/user/', createUser)
}

module.exports = { init }