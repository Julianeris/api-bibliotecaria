const NotFound = require('../errors/notFoundError.js');
const  { bookPublisher } =  require ('../models/bookPublisherModels.js');

class BookPublisherController {
    
    static listBookPublishers = async(req, res, next) => {
        try{
            const listBookPublishers = await bookPublisher.find({});
            res.status(200).json(listBookPublishers);
        } catch (error) {
            next(error);
        }        
    };

    static listBookPublisherById = async(req, res, next) => {
        try{
            const id = req.params.id;
            const bookPublisherFound = await bookPublisher.findById(id);
            res.status(200).json(bookPublisherFound);
            if(!bookPublisherFound){
                next(new NotFound)('Book Publisher not found!');
            }
        } catch (error) {
            next(error);
        }        
    };

    static registerBookPublisher = async(req, res, next) => {
        try{
            await bookPublisher.create(req.body);
            res.status(201).json({ message:'Successfully created', bookPublisher: bookPublisher });
        } catch (erro) {
            next(erro);
        }
    };

    static updateBookPublisher = async(req, res, next) => {
        try{
            const id = req.params.id;
            await bookPublisher.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Updated book publisher' });
            if(!id){
                next(new NotFound)('Book Publisher not found!');
            }
        } catch (error) {
            next(error);
        }        
    };
    
    static deleteBookPublisherById = async(req, res, next) => {
        try{
            const id = req.params.id;
            await bookPublisher.findByIdAndDelete(id);
            res.status(200).json({message: 'Book publisher deleted successfully'});
            if(!id){
                next(new NotFound)('Book Publisher not found!');
            }
        } catch (error) {
            next(error);
        }        
    };

    static listBookPublishersBySearch = async (req, res, next) => {
        try {
            const search = await searchParams(req.query);
    
            if (search !== null) {
                const resultBookPublishers = await bookPublisher
                    .find(search);
    
                res.status(200).send(resultBookPublishers);
            } else {
                res.status(200).send([]);
            }
        } catch (error) {
            next(error);
        }
    };
}
    
async function searchParams(params) {
    const { bookPublisherName } = params;
    
    let search = {};
        
    if (bookPublisherName) search.bookPublisherName = { $regex: bookPublisherName, $options: 'i' };

    return search;
}

module.exports = BookPublisherController;