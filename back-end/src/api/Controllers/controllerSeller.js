const serviceSeller = require("../Services/serviceSeller")

const getSale = async (req, res, next) => { 
    try {
        const { id } = req.params;

    const sale = await serviceSeller.findSaleId(id)

    res.status(200).json(sale);
} catch (error) {
    next(error);
  }
} 

const newSale = async (req, res) => {
    const { id } = req.body;

    return res.status(200).json(id);
}

module.exports = { getSale, newSale }