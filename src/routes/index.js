const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');


const book = require ('./book.js');
const author = require ('./author.js');
const bookPublisher = require ('./bookPublisher.js');
const bookSeries = require ('./bookSeries.js');
const literyGenre = require ('./literaryGenre.js');
const bookRate = require ('./rate.js');
const status = require ('./status.js');


const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Api-Bibliotecaria'));
    app.use(express.json(), book, author, bookPublisher, bookSeries, literyGenre, bookRate, status ); //aqui adiciono todas as rotas (livros/editores e etc)
    
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
};

module.exports = routes;



//
//app.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*')
//    res.header(
//        'Access-Content-Allow-Origin',
//        'Origin, X-Requrested-With, Content-Type, Accept, Authorization'
//    );
//    if(req.method === 'OPTIONS'){
//        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//        return res.status(200).send({});
//    }
//    next();
//
//    app.use((req, res, next) => {
//        erro.status(400);
//        next(erro);
//    });
//    
//    app.use((error, req, res, next) => {
//        res.status(error.status || 500);
//        return res.send({
//            erro:{
//                messagem: error.message
//            }
//        });
//    });
//});