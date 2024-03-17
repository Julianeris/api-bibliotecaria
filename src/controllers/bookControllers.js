const book =  require ('../models/bookModels.js');
const { author } = require ('../models/authorModels.js');
const NotFound = require('../errors/notFoundError.js');


class BookController {
        
    static listBooks = async(req, res, next) => {
        try{
            const listBooks = await book.find({});
            res.status(200).json(listBooks);
        } catch (error) {
            next(error);
        }        
    };

    static listBookById = async(req, res, next) => {
        try{
            const id = req.params.id;
            const bookFound = await book.findById(id);
            res.status(200).json(bookFound);
            if(!bookFound){
                next(new NotFound)('Book not found!');
            }
        } catch (error) {
            next(error);
        }        
    };

    static registerBook = async (req, res, next) => {
        const newBook = req.body;
        try {
            const authorId = newBook.author._id; // Acesso correto ao ID do autor
            const authorFound = await author.findById(authorId);
            if (!authorFound) {
                return res.status(404).json({ message: 'Author not found' });
            }
            const bookComplete = { ...newBook, author: authorFound._id };
            await book.create(bookComplete);
            res.status(201).json({ message: 'Successfully created', book: newBook });
        } catch (error) {
            next(error);
        }
    };

    static updateBook = async(req, res, next) => {
        try{
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            if(!id){
                next(new NotFound)('Book not found!');
            }    
            res.status(200).json({message: 'Updated book' });
        } catch (error) {
            next(error);
        }        
    };
    
    static deleteBookById = async(req, res, next) => {
        try{
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({message: 'Book deleted successfully'});
            if(!id){
                next(new NotFound)('Book not found!');
            }
        } catch (error) {
            next(error);
        }        
    };

    static listBooksBySearch = async (req, res, next) => {
        try {
            const search = await searchParams(req.query);
    
            if (search !== null) {
                const resultBooks = await book
                    .find(search);
    
                res.status(200).send(resultBooks);
            } else {
                res.status(200).send([]);
            }
        } catch (error) {
            next(error);
        }
    };
}
    
async function searchParams(params) {
    const { title, minPages, maxPages } = params;
    
    let search = {};
    
    if (title) search.title = { $regex: title, $options: 'i' };
    if (minPages || maxPages) search.numberOfPages = {};
    if (minPages) search.numberOfPages.$gte = minPages;
    if (maxPages) search.numberOfPages.$lte = maxPages;

    return search;
}


module.exports = BookController;