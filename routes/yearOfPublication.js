const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send ({
        message: 'Retorna todos os anos de publicação'
    })
});

router.get('/:yearOfPublicationId', (req, res) => {
    res.status(200).send({
        message: 'Retorna o ano de publicação do Id em questão'
    })
});

router.patch('/:yearOfPublicationId', (req, res) => {
    res.status(202).send({
        message: 'Ano de publicação atualizado'
    })
});

module.exports = router