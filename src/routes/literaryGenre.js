const express = require('express');
const literaryGenreControllers = require('../controllers/literaryGenreControllers.js');

const routes = express.Router();

routes.get('/literaryGenre', literaryGenreControllers.listLiteraryGenre);
routes.get('/literaryGenre/:id', literaryGenreControllers.listLiteraryGenreById);
routes.post('/literaryGenre', literaryGenreControllers.registerLiteraryGenre);
routes.put('/literaryGenre/:id', literaryGenreControllers.updateLiteraryGenre);
routes.delete('/literaryGenre/:id', literaryGenreControllers.deleteLiteraryGenreById);

module.exports = routes;