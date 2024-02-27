const book =  require ('../models/bookModels.js');
const { author } = require ('../models/authorModels.js');
const { bookPublisher } = require ('./bookPublisherControllers.js');
const { bookSeries } = require ('../models/bookSeriesModels.js');
const { literaryGenre } = require ('../models/literaryGenreModels.js');
const { rate } = require ('../models/rateModels.js');
const { status } = require ('../models/statusModels.js');

class BookController {
    
    static async listBooks(req, res) {
        try{
            const listBooks = await book.find({});
            res.status(200).json(listBooks);
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Request failed`});    
        }        
    };

    static async listBookById(req, res) {
        try{
            const id = req.params.id;
            const bookFound = await book.findById(id);
            res.status(200).json(bookFound);
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Request failed`});    
        }        
    };

    static async registerBook(req, res){
        const newBook = req.body;
        try{
            const authorFound = await author.findById(newBook.author);
            const bookComplete = { ...newBook, author: {... authorFound._doc }}
            const bookCreated = await book.create(bookComplete);
            res.status(201).json({ message:'Successfully created', book: newBook });
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Failed to register book`});
        }
    };

    static async updateBook(req, res) {
        try{
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Updated book' });
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Book update failed`});    
        }        
    };
    
    static async deleteBookById(req, res) {
        try{
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({message: 'Book deleted successfully'});
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Book deletion failed`});    
        }        
    };

    static async listBooksByPublisher(req, res) {
        const bookPublisher = req.query.bookPublisher
        try{
            const booksByPublisher = await book.find({ bookPublisher: bookPublisher });
            res.status(200).json(booksByPublisher);
        } catch (error){
            res.status(500).json({message:`${erro.message} - Search failed`});    
        }
    }
};

module.exports = BookController;