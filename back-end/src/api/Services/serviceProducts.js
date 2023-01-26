const { Product } = require('../../database/models');

const getAll = async () => { // Get all products
    const products = await Product.findAll();
    return products;
};

module.exports = {
    getAll,
};