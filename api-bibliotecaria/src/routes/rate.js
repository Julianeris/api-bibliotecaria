const express = require('express');
const rateControllers = require('../controllers/rateControllers');

const routes = express.Router();

routes.put('/rate/:id', rateControllers.updateRate);

module.exports = routes;