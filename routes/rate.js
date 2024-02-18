const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Aqui irá retornar todas as notas possíveis'
    })
});

router.get('/:rateId', (req, res) => {
    res.status(200).send({
        message: 'Retorna a nota do Id em questão'
    })
});

router.patch('/:rateId', (req, res) => {
    res.status(202).send({
        message: 'Nota atualizada'
    })
});

module.exports = router;