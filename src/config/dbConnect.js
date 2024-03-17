const mongoose = require ('mongoose');

async function connectToDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    
    return mongoose.connection;
}

module.exports = connectToDatabase;