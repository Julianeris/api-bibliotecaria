const mongoose = require ('mongoose'); 

const bookSeriesSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    bookSeriesName: { type: String }
}, { versionKey: false });

const bookSeries = mongoose.model('bookSeries', bookSeriesSchema);

module.exports = {
    bookSeries, 
    bookSeriesSchema
};