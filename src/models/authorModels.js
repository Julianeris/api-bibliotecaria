const mongoose = require ('mongoose'); 

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    authorName: { type: String, require: true }
}, { versionKey: false });

const author = mongoose.model('author', authorSchema);

module.exports = {
    author, 
    authorSchema
};
