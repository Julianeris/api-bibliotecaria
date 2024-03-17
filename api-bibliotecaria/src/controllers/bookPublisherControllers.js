const  { bookPublisher } =  require ('../models/bookPublisherModels')

class BookPublisherController {
    
    static async listBookPublishers(req, res) {
        try{
            const listBookPublishers = await bookPublisher.find({});
            res.status(200).json(listBookPublishers);
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Request failed`});    
        }        
    };

    static async listBookPublisherById(req, res) {
        try{
            const id = req.params.id;
            const bookPublisherFound = await bookPublisher.findById(id);
            res.status(200).json(bookPublisherFound);
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Request failed`});    
        }        
    };

    static async registerBookPublisher(req, res){
        try{
            const newBookPublisher = await bookPublisher.create(req.body);
            res.status(201).json({ message:'Successfully created', bookPublisher: bookPublisher });
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Failed to register book publisher`});
        }
    };

    static async updateBookPublisher(req, res) {
        try{
            const id = req.params.id;
            await bookPublisher.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Updated book publisher' });
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Failed to uptade book publisher`});    
        }        
    };
    
    static async deleteBookPublisherById(req, res) {
        try{
            const id = req.params.id;
            await bookPublisher.findByIdAndDelete(id);
            res.status(200).json({message: 'Book publisher deleted successfully'});
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Book publisher deletion failed`});    
        }        
    };
};

module.exports = BookPublisherController