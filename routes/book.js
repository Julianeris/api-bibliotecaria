const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;
const { v4: UUID } = require('uuid');

router.get('/', (req, res) => {
    res.status(200).send ({
        message: "Aqui retornará uma lista de livros da sua estante"
    })
});

router.get('/:bookId', (req, res) => {
    res.status(200).send({
        message: 'Retorna o livro do Id em questão'
    })
});

router.post('/', (req, res, next) => {
    //const book = {
    //    bookName: req.body.bookName,
    //    authorName: req.body.authorName,
    //    literaryGenre: req.body.literaryGenre,
    //    bookPublisher: req.body.bookPublisher,
    //    yearOfPublication: req.body.yearOfPublication,
    //    ISBN: req.body.ISBN,
    //    isABookSerie: req.body.isABookSerie,
    //    status: req.body.status,
    //    numberOfPages: req.body.numberOfPages
    //};

    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO book (bookName, authorName, literaryGenre, bookPublisher, yearOfPublication, ISBN, isABookSerie, status, numberOfPages) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [req.body.bookName, req.body.authorName, req.body.literaryGenre, req.body.bookPublisher, req.body.yearOfPublication, req.body.ISBN, req.body.isABookSerie, req.body.status, req.body.numberOfPages],
            (error, resultado, field) => { //callback da query
                conn.release();

                if (error) { 
                    return res.status(500).send({
                        error: error,
                        Response: null
                    });
                }
                res.status(201).send({
                    message: 'Livro cadastrado com sucesso',
                    book_id: resultado.insertId
                });
            }
        )
    })
});



router.delete('/:bookId', (req, res) => {
    res.status(200).send({
        message: 'Livro do id foi excluído'
    })
});

router.patch('/:bookId', (req, res) => {
    res.status(202).send({
        message: 'Livros do Id atualizado'
    })
});

module.exports = router;


