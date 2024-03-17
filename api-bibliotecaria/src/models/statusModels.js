const mongoose = require ('mongoose'); 

const statusSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    status: { type: String, required: true }
}, { versionKey: false });

const status = mongoose.model('status', statusSchema);

module.exports = {
    status, 
    statusSchema
};