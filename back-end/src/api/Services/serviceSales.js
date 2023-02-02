const { Sale,
  // Product, User, 
   SaleProduct } = require('../../database/models');
const { TokenDecoder } = require('./auth/authLogin');

const createSale = async (saleData) => {
  const userId = TokenDecoder(saleData.token);
  const { id: saleId } = await Sale.create({ ...saleData.sale, userId });
  const products = saleData.products.map((product) => ({ saleId, ...product }));
  await SaleProduct.bulkCreate(products);

  return saleId;
};

module.exports = { createSale };
