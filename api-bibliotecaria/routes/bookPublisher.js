const express = require ('express');
const router = express.Router();
const { v4: UUID } = require('uuid');

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Aqui retornará todas as editoras'
    })
});

router.get('/:bookPublisherId', (req, res) => {
    res.status(200).send({
        message: 'Retorna a editora do Id em questão'
    })
});

router.patch('/:bookPublisherId', (req, res) => {
    res.status(202).send({
        message: 'Editora atualizada'
    })
});

module.exports = router;