const NotFound = require('../errors/notFoundError.js');
const  { literaryGenre } =  require ('../models/literaryGenreModels.js');

class LiteraryGenreController {
    
    static listLiteraryGenre = async(req, res, next) => {
        try{
            const listLiteraryGenre = await literaryGenre.find({});
            res.status(200).json(listLiteraryGenre);
        } catch (error) {
            next(error);
        }        
    };

    static listLiteraryGenreById = async(req, res, next) => {
        try{
            const id = req.params.id;
            const literaryGenreFound = await literaryGenre.findById(id);
            res.status(200).json(literaryGenreFound);
            if(!literaryGenreFound){
                next(new NotFound)('Literary genre not found!');
            }
        } catch (error) {
            next(error);
        }
    };

    static registerLiteraryGenre = async(req, res, next) => {
        try{
            await literaryGenre.create(req.body);
            res.status(201).json({ message:'Successfully created', literaryGenre:literaryGenre });
        } catch (erro) {
            next(erro);
        }
    };

    static updateLiteraryGenre = async(req, res, next) => {
        try{
            const id = req.params.id;
            await literaryGenre.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Updated literary genre' });
            if(!id){
                next(new NotFound)('Literary genre not found!');
            }
        } catch (error) {
            next(error);
        }        
    };
    
    static deleteLiteraryGenreById = async(req, res, next) => {
        try{
            const id = req.params.id;
            await literaryGenre.findByIdAndDelete(id);
            res.status(200).json({message: 'Literary genre deleted successfully'});
            if(!id){
                next(new NotFound)('Literary genre not found!');
            }
        } catch (error) {
            next(error);
        }        
    };
}

module.exports = LiteraryGenreController;