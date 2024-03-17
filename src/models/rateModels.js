const mongoose = require ('mongoose'); 

const bookRateSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    bookRate: { 
        type: Number, 
        required: true,
        enum: {
            values: [1, 2, 3, 4, 5],
            message: 'This rate {VALUE} does not exist!'
        }
    }
}, { versionKey: false, validateBeforeSave: true });

const bookRate = mongoose.model('rate', bookRateSchema);

module.exports = {
    bookRate, 
    bookRateSchema
};