const mongoose = require ('mongoose'); 

const bookPublisherSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    bookPublisher: { type: String, require: true }
}, { versionKey: false });

const bookPublisher = mongoose.model('bookPublisher', bookPublisherSchema);

module.exports = {
    bookPublisher, 
    bookPublisherSchema
};