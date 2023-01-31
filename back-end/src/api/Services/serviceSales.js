// const jwt = require('jsonwebtoken');

// const { Sale, User, SalesProducts } = require("../../database/models");

// const decode = async (token) => {
//     const decode  = jwt.verify(token);
//     return decode;
// };

// const createSale = async (sale) => {
//     const { user_id, total_price, delivery_address, delivery_number, sale_date} = sale;
//     const newSale = await Sale.create({ user_id, total_price, delivery_address, delivery_number, sale_date });
//     return newSale;
// }

// const createSalesProducts = async (salesProducts) => {
//     const { sale_id, product_id, quantity } = salesProducts;
//     const newSalesProducts = await SalesProducts.create({ sale_id, product_id, quantity });
//     return newSalesProducts;
// }

// const getAllSales = async () => {
//     const allSales = await Sale.findAll({ include: { model: User, as: 'user' } });
//     return allSales;
// }

// const getSaleById = async (id) => {
//     const sale = await Sale.findByPk(id, { include: { model: User, as: 'user' } });
//     return sale;
// }

// const updateSale = async (id, sale) => {
//     const { user_id, total_price, delivery_address, delivery_number, sale_date } = sale;
//     const saleUpdated = await Sale.update({ user_id, total_price, delivery_address, delivery_number, sale_date}, { where: { id } });
//     return saleUpdated;
// }

// const deleteSale = async (id) => {
//     const saleDeleted = await Sale.destroy({ where: { id } });
//     return saleDeleted;
// }

// module.exports = {
//     createSale,
//     createSalesProducts,
//     getAllSales,
//     getSaleById,
//     updateSale,
//     deleteSale,
//     decode,
// };
