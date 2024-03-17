const  { author } =  require ('../models/authorModels.js')

class AuthorController {
    
    static async listAuthors(req, res) {
        try{
            const listAuthors = await author.find({});
            res.status(200).json(listAuthors);
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Request failed`});    
        }        
    };

    static async listAuthorById(req, res) {
        try{
            const id = req.params.id;
            const authorFound = await author.findById(id);
            res.status(200).json(authorFound);
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Request failed`});    
        }        
    };

    static async registerAuthor(req, res){
        try{
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message:'Successfully created', author: newAuthor });
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Failed to register author`});
        }
    };

    static async updateAuthor(req, res) {
        try{
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Updated author' });
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Failed to updated author`});    
        }        
    };
    
    static async deleteAuthorById(req, res) {
        try{
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({message: 'Author successfully deleted'});
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Author deletion failed`});    
        }        
    };
};

module.exports = AuthorController;