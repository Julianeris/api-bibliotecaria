const NotFound = require ('../errors/notFoundError.js');

function notFoundHandler(req, res, next){
    const error404 = new NotFound();
    next(error404);
}

module.exports = notFoundHandler;