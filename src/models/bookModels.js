const mongoose = require ('mongoose'); 
const { authorSchema } = require ('./authorModels.js');
const { bookPublisherSchema } = require ('./bookPublisherModels.js');
const { literaryGenreSchema } = require ('./literaryGenreModels.js');
const { bookRateSchema } = require ('./rateModels.js');
const { statusSchema } = require ('./statusModels.js');
const { bookSeriesSchema } = require ('./bookSeriesModels.js')

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, require: true },
    numberOfPages: { type: Number, require: true },
    ISBN: { type: String, require: true },
    yearOfPublication: { type: Number, require: true },
    author: authorSchema,
    bookPublisher: bookPublisherSchema,
    literaryGenre: literaryGenreSchema,
    bookSeries: bookSeriesSchema,
    rate: bookRateSchema,
    status: statusSchema
}, { versionKey: false });

const book = mongoose.model('books', bookSchema);

module.exports = book;