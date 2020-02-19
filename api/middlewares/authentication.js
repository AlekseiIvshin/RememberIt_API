function getUser(req, res, next) {
    req.meta = req.meta || {};
    req.meta.user = req.params.name
    return next();
}

module.exports = {getUser}