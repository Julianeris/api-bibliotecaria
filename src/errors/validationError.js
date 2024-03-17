const WrongRequest = require ('./wrongRequestError.js');

class ValidationError extends WrongRequest{
    constructor(erro){
        const errorMessages = Object.values(erro.erros)
            .map(erro => erro.message)
            .join('; ');

        super(`This erros are found ${errorMessages}`);
    }
}

module.exports = ValidationError;