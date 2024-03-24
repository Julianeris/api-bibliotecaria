const wrongRequestError = require ('../errors/wrongRequestError.js');

async function pages (req, res, next){
    try{
        let{limit = 5, page = 1, ordering = '_id:-1'} = req.query;
        let[orderingCamp, order] = ordering.split(':');

        limit = parseInt(limit);
        page = parseInt(page);
        order = parseInt(order);

        const result = req.result;

        if(limit > 0 && page > 0){
            const pageResult = await result.find()
                .sort({ [orderingCamp]: order})
                .skip((page -1) * limit)
                .limit(limit)
                .exec();
            res.status(200).json(pageResult);
        } else {
            next(new wrongRequestError());
        }
    } catch (erro){
        next(erro);
    }
}

module.exports = pages;