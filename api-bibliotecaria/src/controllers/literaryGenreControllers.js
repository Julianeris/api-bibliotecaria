const  { literaryGenre } =  require ('../models/literaryGenreModels.js')

class LiteraryGenreController {
    
    static async listLiteraryGenre(req, res) {
        try{
            const listLiteraryGenre = await literaryGenre.find({});
            res.status(200).json(listLiteraryGenre);
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Request failed`});    
        }        
    };

    static async listLiteraryGenreById(req, res) {
        try{
            const id = req.params.id;
            const literaryGenreFound = await literaryGenre.findById(id);
            res.status(200).json(literaryGenreFound);
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Request failed`});    
        }        
    };

    static async registerLiteraryGenre(req, res){
        try{
            const newLiteraryGenre = await literaryGenre.create(req.body);
            res.status(201).json({ message:'Successfully created', literaryGenre:literaryGenre });
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Failed to register a literary genre`});
        }
    };

    static async updateLiteraryGenre(req, res) {
        try{
            const id = req.params.id;
            await literaryGenre.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Updated literary genre' });
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Failed to uptade literary genre`});    
        }        
    };
    
    static async deleteLiteraryGenreById(req, res) {
        try{
            const id = req.params.id;
            await literaryGenre.findByIdAndDelete(id);
            res.status(200).json({message: 'Literary genre deleted successfully'});
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Literary genre deletion failed`});    
        }        
    };
};

module.exports = LiteraryGenreController;