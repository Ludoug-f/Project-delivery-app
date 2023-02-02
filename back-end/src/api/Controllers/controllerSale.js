const SaleService = require('../Services/serviceSales');

const Newsale = async (req, res) => {
  const id = await SaleService.newSale(req.body);

  res.status(201).json({ id });
};

const getAllSales = async (req, res) => {
  const sales = await SaleService.getAllSales();

  res.status(200).json(sales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await SaleService.getSaleById(id);

  res.status(200).json(sale);
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const sale = await SaleService.updateSale(id, req.body);

  res.status(200).json(sale);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const sale = await SaleService.deleteSale(id);

  res.status(200).json(sale);
};

module.exports = {
    Newsale,
    getAllSales,
    getSaleById,
    updateSale,
    deleteSale,
};
