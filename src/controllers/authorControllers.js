const NotFound = require('../errors/notFoundError.js');
const  { author } =  require ('../models/authorModels.js');

class AuthorController {
    
    static listAuthors = async(req, res, next) => {
        try{
            const authorsResult =  author.find();
            req.result = authorsResult;
            next();
        } catch (error) {
            res.status(500).json({ message: 'Servidor error' });
        }        
    };

    static listAuthorById = async(req, res, next) => {
        try{
            const id = req.params.id;
            const authorFound = await author.findById(id);
            res.status(200).json(authorFound);
            if(!authorFound){
                next(new NotFound)('Author not found!');
            }
        } catch (error) {
            next(error);
        }        
    };

    static registerAuthor = async(req, res, next) => {
        try{
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message:'Successfully created', author: newAuthor });
        } catch (erro) {
            next(erro);
        }
    };

    static updateAuthor = async(req, res, next) => {
        try{
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Updated author' });
            if(!author){
                next(new NotFound)('Auhtor not found!');
            }
        } catch (error) {
            next(error);
        }        
    };
    
    static deleteAuthorById = async(req, res, next) => {
        try{
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({message: 'Author successfully deleted'});
            if(!id){
                next(new NotFound)('Author not found!');
            }
        } catch (error) {
            next(error);
        }        
    };
}

module.exports = AuthorController;