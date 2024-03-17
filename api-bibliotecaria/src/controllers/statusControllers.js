const  { status } =  require ('../models/rateModels.js')

class StatusController {
    
    static async updateStatus(req, res) {
        try{
            const id = req.params.id;
            await status.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Status updated' });
        } catch (error) {
            res.status(500).json({message:`${erro.message} - Failed to uptade status`});    
        }        
    };
};

module.exports = StatusController;