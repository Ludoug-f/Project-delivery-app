const { Sale,
  // Product, User, 
   SaleProduct } = require('../../database/models');
const { TokenDecoder } = require('./auth/authLogin');

const newSale = async (saleData) => {
  const userId = TokenDecoder(saleData.token);
  const { id: saleId } = await Sale.create({ ...saleData.sale, userId });
  const products = saleData.products.map((product) => ({ saleId, ...product }));
  await SaleProduct.bulkCreate(products);

  return saleId;
};

const getAllSales = async () => {
  const sales = await Sale.findAll({});
  return sales;
};

const getSaleById = async (id) => {
  const sale = await Sale.findOne({
    where: {
      id,
    },
  });

  return sale;
};

const updateSale = async (id, saleData) => {
  const sale = await Sale.update(saleData, {
    where: {
      id,
    },
  });

  return sale;
};

const deleteSale = async (id) => {
  const sale = await Sale.destroy({
    where: {
      id,
    },
  });

  return sale;
};

module.exports = {
  newSale,
  getAllSales,
  getSaleById,
  updateSale,
  deleteSale,
};

// Path: back-end/src/api/Controllers/controllerSale.js