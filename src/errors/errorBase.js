class ErrorBase extends Error {
    constructor(mensagem = '', status){
        super();
        this.message = mensagem;
        this.status = status;
    }

    sendResponse(res){
        res.status(this.status).send({
            mensagem: this.message,
            status:this.status
        });
    }
}

module.exports = ErrorBase;