const serviceProduct = require('../Services/serviceProducts');

// Get all products
const getAll = async (req, res) => { 
    const products = await serviceProduct.getAll();
    res.status(200).json(products);
    };

module.exports = {
    getAll,
};