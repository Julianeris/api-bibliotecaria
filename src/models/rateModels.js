const mongoose = require ('mongoose'); 

const bookRateSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    bookRate: { type: Number, required: true }
}, { versionKey: false });

const bookRate = mongoose.model('rate', bookRateSchema);

module.exports = {
    bookRate, 
    bookRateSchema
};