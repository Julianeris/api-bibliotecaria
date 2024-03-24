const express = require('express');
const AuthorController = require('../controllers/authorControllers.js');
const pages = require('../middlewares/paginar.js');

const routes = express.Router();

routes.get('/author', AuthorController.listAuthors, pages);
routes.get('/author/:id', AuthorController.listAuthorById);
routes.post('/author', AuthorController.registerAuthor);
routes.put('/author/:id', AuthorController.updateAuthor);
routes.delete('/author/:id', AuthorController.deleteAuthorById);

module.exports = routes;