const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routesBook = require('./routes/book');
const routerAuthor = require('./routes/author');
const routerBookPublisher = require ('./routes/bookPublisher');
const routerBookSeries = require ('./routes/bookSeries');
const routerLiteraryGenre = require('./routes/literaryGenre');
const routerRate = require('./routes/rate');
const routerStatus = require ('./routes/status');
const routerYearOfPublication = require ('./routes/yearOfPublication');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Content-Allow-Origin',
        'Origin, X-Requrested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
})

app.use('/book', routesBook);
app.use('/author', routerAuthor);
app.use('/bookPublisher', routerBookPublisher);
app.use('/bookSeries', routerBookSeries);
app.use('/literaryGenre', routerLiteraryGenre);
app.use('/rate', routerRate);
app.use('/status', routerStatus);
app.use('/yearOfPublication', routerYearOfPublication);

app.use((req, res, next) => {
    erro.status(400);
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro:{
            messagem: error.message
        }
    });
});

module.exports = app