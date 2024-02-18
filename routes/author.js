const express = require('express');
const router = express.Router();
const { v4: UUID } = require('uuid');

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Aqui irá retornar uma lista de autores'
    })
});

router.get('/:authorId', (req, res) => {
    res.status(200).send({
        message: 'Retorna o autor do Id em questão'
    })
});

router.patch('/:authorId', (req, res) => {
    res.status(202).send({
        message: 'Autor do Id atualizado'
    })
});

module.exports = router;