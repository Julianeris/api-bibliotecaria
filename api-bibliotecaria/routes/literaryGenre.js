const express = require ('express');
const router = express.Router();
const { v4: UUID } = require('uuid');

router.get('/', (req, res) => {
    res.status(200).send ({
        message: 'Aqui irá retornar uma lista de generos literarios'
    })
});

router.get('/:literaryGenreId', (req, res) => {
    res.status(200).send({
        message: 'Retorna o genero literario do Id em questão'
    })
});

router.patch('/:literaryGenreId', (req, res) => {
    res.status(202).send({
        message: 'Genero literario atualizado'
    })
});

module.exports = router;