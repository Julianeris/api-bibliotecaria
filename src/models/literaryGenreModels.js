const mongoose = require ('mongoose'); 

const literaryGenreSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    literaryGenre: { type: String, require: true }
}, { versionKey: false });

const literaryGenre = mongoose.model('literaryGenre', literaryGenreSchema);

module.exports = {
    literaryGenre, 
    literaryGenreSchema
};