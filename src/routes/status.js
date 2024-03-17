const express = require('express');
const StatusController = require('../controllers/statusControllers.js');

const routes = express.Router();

routes.put('/status/:id', StatusController.updateStatus);

module.exports = routes;