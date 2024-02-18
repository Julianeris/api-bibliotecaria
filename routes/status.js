const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send ({
        message: 'Retorna todos os status de leitura'
    })
});

router.get('/:statusId', (req, res) => {
    res.status(200).send({
        message: 'Retorna o status do Id em questão'
    })
}); 

router.patch('/:statusId', (req, res) => {
    res.status(202).send({
        message: 'Status de leitura atualizado'
    })
});

module.exports = router