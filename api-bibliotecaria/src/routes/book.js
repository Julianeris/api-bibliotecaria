const express = require('express');
const BookControllers = require('../controllers/bookControllers');

const routes = express.Router();

routes.get('/book', BookControllers.listBooks);
routes.get('/book/:id', BookControllers.listBookById);
routes.post('/book', BookControllers.registerBook);
routes.put('/book/:id', BookControllers.updateBook);
routes.delete('/book/:id', BookControllers.deleteBookById);

module.exports = routes;