const  { bookSeries } =  require ('../models/bookSeriesModels.js')

class BookSeriesController {
    
    static async listBookSeries(req, res) {
        try{
            const listBookSeries = await bookSeries.find({});
            res.status(200).json(listBookSeries);
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Request failed`});    
        }        
    };

    static async listBookSerieById(req, res) {
        try{
            const id = req.params.id;
            const bookSerieFound = await bookSeries.findById(id);
            res.status(200).json(bookSerieFound);
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Request failed`});    
        }        
    };

    static async registerBookSerie(req, res){
        try{
            const newBookSerie = await bookSeries.create(req.body);
            res.status(201).json({ message:'Successfully created', bookSeries: bookSeries });
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Failed to register book serie`});
        }
    };

    static async updateBookSerie(req, res) {
        try{
            const id = req.params.id;
            await bookSeries.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Updated book serie' });
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Failed to uptade book serie`});    
        }        
    };
    
    static async deleteBookSerieById(req, res) {
        try{
            const id = req.params.id;
            await bookSeries.findByIdAndDelete(id);
            res.status(200).json({message: 'Book serie deleted successfully'});
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Book serie deletion failed`});    
        }        
    };
};

module.exports = BookSeriesController