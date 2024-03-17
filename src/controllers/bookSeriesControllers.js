const NotFound = require('../errors/notFoundError.js');
const  { bookSeries } =  require ('../models/bookSeriesModels.js');

class BookSeriesController {
    
    static listBookSeries = async(req, res, next) => {
        try{
            const listBookSeries = await bookSeries.find({});
            res.status(200).json(listBookSeries);
        } catch (error) {
            next(error);
        }
    };

    static listBookSerieById = async(req, res, next) => {
        try{
            const id = req.params.id;
            const bookSerieFound = await bookSeries.findById(id);
            res.status(200).json(bookSerieFound);
            if(!bookSerieFound){
                next(new NotFound)('Book Serie not found!');
            }
        } catch (error) {
            next(error);
        }
    };

    static registerBookSerie = async(req, res, next) => {
        try{
            await bookSeries.create(req.body);
            res.status(201).json({ message:'Successfully created', bookSeries: bookSeries });
        } catch (erro) {
            next(erro);
        }
    };

    static updateBookSerie = async(req, res, next) => {
        try{
            const id = req.params.id;
            await bookSeries.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Updated book serie' });
            if(!id){
                next(new NotFound)('Book Serie not found!');
            }
        } catch (error) {
            next(error);
        }        
    };
    
    static deleteBookSerieById = async(req, res, next) => {
        try{
            const id = req.params.id;
            await bookSeries.findByIdAndDelete(id);
            res.status(200).json({message: 'Book serie deleted successfully'});
            if(!id){
                next(new NotFound)('Book Serie not found!');
            }
        } catch (error) {
            next(error);
        }        
    };
}

module.exports = BookSeriesController;