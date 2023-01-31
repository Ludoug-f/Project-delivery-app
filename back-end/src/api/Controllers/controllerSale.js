// const serviceSales = require("../Services/serviceSales");

// const createSale = async (req, res) => {
//     const { user_id, totalPrice, delivery,Address, delivery_number, sale_date } = req.body;
//     const newSale = await serviceSales.createSale({ user_id, totalPrice, delivery,Address, delivery_number, sale_date });
//     return res.status(201).json(newSale);
//     }

// const createSalesProducts = async (req, res) => {
//     const { saleId, productId, quantity } = req.body;
//     const newSalesProducts = await serviceSales.createSalesProducts({ saleId, productId, quantity });
//     return res.status(201).json(newSalesProducts);
//     }

// const getAllSales = async (_req, res) => {
//     const allSales = await serviceSales.getAllSales();
//     return res.status(200).json(allSales);
//     }

// const getSaleById = async (req, res) => {
//     const { id } = req.params;
//     const sale = await serviceSales.getSaleById(id);
//     return res.status(200).json(sale);
//     }

// const updateSale = async (req, res) => {
//     const { id } = req.params;
//     const { user_id, totalPrice, delivery,Address, delivery_number, sale_date } = req.body;
//     const saleUpdated = await serviceSales.updateSale(id, { user_id, totalPrice, delivery,Address, delivery_number, sale_date });
//     return res.status(200).json(saleUpdated);
//     }

// const deleteSale = async (req, res) => {
//     const { id } = req.params;
//     const saleDeleted = await serviceSales.deleteSale(id);
//     return res.status(200).json(saleDeleted);
//     }

// module.exports = {
//     createSale,
//     createSalesProducts,
//     getAllSales,
//     getSaleById,
//     updateSale,
//     deleteSale,
//     };
