const ErrorBase = require ('./errorBase.js');

class WrongRequest extends ErrorBase {
    constructor(message = 'One or more data provided is incorrect'){
        super(message, 400);
    }
}

module.exports = WrongRequest;