const express = require('express');
const bookSeriesControllers = require('../controllers/bookSeriesControllers.js');

const routes = express.Router();

routes.get('/bookSeries', bookSeriesControllers.listBookSeries);
routes.get('/bookSeries/:id', bookSeriesControllers.listBookSerieById);
routes.post('/bookSeries', bookSeriesControllers.registerBookSerie);
routes.put('/bookSeries/:id', bookSeriesControllers.updateBookSerie);
routes.delete('/bookSeries/:id', bookSeriesControllers.deleteBookSerieById);

module.exports = routes;