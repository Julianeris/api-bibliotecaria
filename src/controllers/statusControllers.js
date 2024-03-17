const NotFound = require('../errors/notFoundError.js');
const  { status } =  require ('../models/statusModels.js');

class StatusController {
    
    static updateStatus = async(req, res, next) => {
        try{
            const id = req.params.id;
            await status.findByIdAndUpdate(id, req.body, { runValidators: true });
            res.status(200).json({message: 'Status updated' });
            if(!id){
                console.log(NotFound);
                next(new NotFound)('Status not found!');
            }
        } catch (error) {
            next(error);
        }        
    };
}

module.exports = StatusController;