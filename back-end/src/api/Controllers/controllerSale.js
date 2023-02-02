const SaleService = require('../Services/serviceSales');

const Newsale = async (req, res) => {
  const id = await SaleService.createSale(req.body);

  res.status(201).json({ id });
};

module.exports = {
    Newsale,
};
