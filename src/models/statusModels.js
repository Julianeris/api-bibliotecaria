const mongoose = require ('mongoose'); 

const statusSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    status: { 
        type: String, 
        required: true,
        enum:{
            values: ['Not read', 'Reading', 'Read'],
            message: 'This status {VALUE} does not exist!'
        }, 
    }
}, { versionKey: false, validateBeforeSave: true });

const status = mongoose.model('status', statusSchema);

module.exports = {
    status, 
    statusSchema
};