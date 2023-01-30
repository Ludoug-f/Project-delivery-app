const { Sales } = require('../../database/models');

const findSaleId = async (id) => {

  const  sale = await Sales.findByPk(id);

  return sale
}

const newSale = async () => { 

  const createUser = await Sales.create({ id });

  return createUser
};

module.exports = { findSaleId, newSale }