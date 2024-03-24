const express = require('express');
const BookPublisherController = require('../controllers/bookPublisherControllers');

const routes = express.Router();

routes.get('/bookPublisher', BookPublisherController.listBookPublishers);
routes.get('/bookPublisher/:id', BookPublisherController.listBookPublisherById);
routes.post('/bookPublisher', BookPublisherController.registerBookPublisher);
routes.put('/bookPublisher/:id', BookPublisherController.updateBookPublisher);
routes.delete('/bookPublisher/:id', BookPublisherController.deleteBookPublisherById);

module.exports = routes;