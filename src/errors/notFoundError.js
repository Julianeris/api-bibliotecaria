const ErrorBase = require ('./errorBase.js');

class NotFound extends ErrorBase{
    constructor(message = 'Not found!'){
        super(message, 404);
    }
}

module.exports = NotFound;