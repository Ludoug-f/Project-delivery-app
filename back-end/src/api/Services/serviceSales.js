const { Sale, Product, User, SaleProduct } = require('../../database/models');
const { TokenDecoder } = require('./auth/authLogin');

// New Sale 
const newSale = async (saleData) => {
  const userId = TokenDecoder(saleData.token);
  const { id: saleId } = await Sale.create({ ...saleData.sale, userId });
  const products = saleData.products.map((product) => ({ saleId, ...product }));
  await SaleProduct.bulkCreate(products);

  return saleId;
};

// Get Order by Seller
const getSellerSales = async (tokenSellerId) => {
  const sellerId = TokenDecoder(tokenSellerId);
  const sales = await Sale.findAll({ where: { sellerId } });

  return sales;
};

// -----GAMBIARRA---------
const getUserId = async (email) => {
  const { id } = await User.findOne({
    where: {
      email,
    },
  });
  return id;
};

const GetSaleCustomer = async (email) => {
  const id = await getUserId(email);
  const sales = await Sale.findAll({
      where: {
          userId: id,
      },
  });
  return sales;
};

const getSalesCustomer = async (email) => {
  const sales = await GetSaleCustomer(email);
  return sales;
};
// -----------------------

// Get Sale Products
const getSaleProducts = async (saleId) => {
  const sales = await Sale.findOne({
     where: { id: saleId },
    include: [
      {
      model: Product,
      as: 'products',
    }, {
      model: User,
      as: 'users',
    }, {
      model: User,
      as: 'seller',
    }] });

    return sales;
};

// Update Sale
const updateSale = async ({ status, id }) => {
  const affectedRows = await Sale.update({ status }, { where: { id } });

  return affectedRows;
};

module.exports = { newSale, getSellerSales, getSalesCustomer, getSaleProducts, updateSale };
