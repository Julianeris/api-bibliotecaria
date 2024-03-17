const express = require('express');
const morgan = require('morgan');
const connectToDatabase = require ('./config/dbConnect.js');
const routes = require ('./routes/index.js');
const errorHandler = require('./middlewares/errorHandler.js');
const notFoundHandler = require('./middlewares/notFoundHandler.js');

async function startConnection(){
    try {
        const connection = await connectToDatabase();
        connection.on('error', (erro) => {
            console.error('Connection error', erro);
        });
        
        connection.once('open', () => {
            console.log('Connection made successfully');
        });
    } catch (error) {
        console.error('Error initializing the connection', error);
    }
}

startConnection();

const app = express();
app.use(morgan('dev'));
routes(app);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;