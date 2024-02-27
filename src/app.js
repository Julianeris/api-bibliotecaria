const express = require('express');
const connectToDatabase = require ('./config/dbConnect.js');
const routes = require ('./routes/index.js')

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
routes(app);

module.exports = app;