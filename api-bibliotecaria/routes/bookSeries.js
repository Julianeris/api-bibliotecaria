const express = require ('express');
const router = express.Router();
const { v4: UUID } = require('uuid');

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Aqui retornará todas as séries'
    })
});

router.get('/:bookSerieId', (req, res) => {
    res.status(200).send({
        message: 'Retorna a série do Id em questão'
    })
});

router.patch('/:bookSerieId', (req, res) => {
    res.status(202).send({
        message: 'Série atualizada'
    })
});

module.exports = router;