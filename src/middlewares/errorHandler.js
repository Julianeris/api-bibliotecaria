const mongoose = require('mongoose');
const ErrorBase = require('../errors/errorBase.js');
const ValidationError = require('../errors/validationError.js'); // Corrigindo a importação para a classe correta de erro de validação
const NotFound = require('../errors/notFoundError.js');
const WrongRequest = require('../errors/wrongRequestError.js');

// eslint-disable-next-line no-unused-vars
function errorHandler(erro, req, res, next){
    console.error(erro);

    if (erro instanceof mongoose.Error) {
        if (erro instanceof mongoose.Error.ValidationError) {
            // Se o erro for uma instância de ValidationError do Mongoose
            // Verifica se existe erro.errors antes de tentar acessá-lo
            const errors = erro.errors ? Object.values(erro.errors).map(error => error.message) : [];
            new ValidationError(errors.join(', ')).sendResponse(res);
        } else {
            // Se for qualquer outro tipo de erro do Mongoose, trata como erro de requisição inválida
            new WrongRequest().sendResponse(res);
        }
    } else if (erro instanceof NotFound) {
        // Trata erros de "não encontrado"
        erro.sendResponse(res);
    } else {
        // Trata outros tipos de erro como erro genérico
        new ErrorBase().sendResponse(res);
    }
}


module.exports = errorHandler;