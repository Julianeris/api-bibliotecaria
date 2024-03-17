const mongoose = require ('mongoose'); 
const { authorSchema } = require ('./authorModels.js');
const { bookPublisherSchema } = require ('./bookPublisherModels.js');
const { literaryGenreSchema } = require ('./literaryGenreModels.js');
const { bookRateSchema } = require ('./rateModels.js');
const { statusSchema } = require ('./statusModels.js');
const { bookSeriesSchema } = require ('./bookSeriesModels.js');

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    numberOfPages: { 
        type: Number, 
        required: true,
        validate: {
            validator: (value) => {
                return value >= 1 && value <= 5000;
            }, 
            message: 'The number of pages needs to be between 1 and 5000.'
        },
    },
    ISBN: { 
        type: String, 
        required: true,
        validate: {
            validator: (value) => {
                return value && value.length === 17;
            },
            message: 'The ISBN needs 17 characters'
        }
    },
    yearOfPublication: { type: Number, required: true },
    author: authorSchema,
    bookPublisher: bookPublisherSchema,
    literaryGenre: literaryGenreSchema,
    bookSeries: bookSeriesSchema,
    rate: bookRateSchema,
    status: statusSchema
}, { versionKey: false });

const book = mongoose.model('book', bookSchema);

module.exports = book;