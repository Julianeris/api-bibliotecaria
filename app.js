const express = require('express');
const app = express();

const routesBook = require('./routes/book');
const routerAuthor = require('./routes/author');
const routerBookPublisher = require ('./routes/bookPublisher');
const routerBookSeries = require ('./routes/bookSeries');
const routerLiteraryGenre = require('./routes/literaryGenre');
const routerRate = require('./routes/rate');
const routerStatus = require ('./routes/status');
const routerYearOfPublication = require ('./routes/yearOfPublication');

app.use('/book', routesBook);
app.use('/author', routerAuthor);
app.use('/bookPublisher', routerBookPublisher);
app.use('/bookSeries', routerBookSeries);
app.use('/literaryGenre', routerLiteraryGenre);
app.use('/rate', routerRate);
app.use('/status', routerStatus);
app.use('/yearOfPublication', routerYearOfPublication);

module.exports = app