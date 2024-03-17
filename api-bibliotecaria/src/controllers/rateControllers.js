const  { bookRate } =  require ('../models/rateModels.js')

class RateController {
    
    static async updateRate(req, res) {
        try{
            const id = req.params.id;
            await bookRate.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Updated rate' });
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Failed to uptade rate`});    
        }        
    };
};

module.exports = RateController;