const NotFound = require('../errors/notFoundError.js');
const  { bookRate } =  require ('../models/rateModels.js');

class RateController {
    
    static updateRate = async(req, res, next) => {
        try{
            const id = req.params.id;
            await bookRate.findByIdAndUpdate(id, req.body, {runValidators: true});
            res.status(200).json({message: 'Updated rate' });
            if(!id){
                next(new NotFound)('Book not found!');
            }
        } catch (error) {
            next(error);
        }        
    };
}

module.exports = RateController;