const SalesModel = require('../models/SalesModel');

const SalesService = {
  getSales: async () => {
    const sales = await SalesModel.getSales();
    return sales;
  },

  getSaleById: async (id) => {
  const saleId = await SalesModel.getSaleById(id);
  if (!saleId) {
    return null;
  }
  return saleId;
  },

};

module.exports = SalesService;