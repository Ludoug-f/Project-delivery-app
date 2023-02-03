const SaleService = require('../Services/serviceSales');

// New Sale
const NewSale = async (req, res) => {
  const id = await SaleService.newSale(req.body);

  res.status(201).json({ id });
};

// Get Order by Seller
const getOrdersSELLER = async (req, res) => {
  const sales = await SaleService.getSellerSales(req.headers.authorization);

  res.status(200).json(sales);
};

// Get Order by Customer
const getOrdersCUSTOMER = async (req, res) => {
  const { email } = req.params;
  if (!email || email === 'undefined') {
    return res.status(400).json({ message: 'Email not sent' });
  }
  
  const response = await SaleService.getSalesCustomer(email);
  res.status(200).json(response);
}; 

// Get Sale Products
const getSaleProducts = async (req, res) => {
  const sale = await SaleService.getSaleProducts(req.params.saleId);

  res.status(200).json(sale);
};

// Update Sale
const updateSales = async (req, res) => {
  const affectedRows = await SaleService.updateSale(req.body);

  if (affectedRows) return res.status(200).json({ affectedRows });

  return res.status(404).json({ message: 'Sale not found' });
};

module.exports = {
  NewSale,
  getOrdersSELLER,
  getOrdersCUSTOMER,
  getSaleProducts,
  updateSales,
 };
