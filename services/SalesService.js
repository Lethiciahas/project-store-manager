const SalesModel = require('../models/SalesModel');

const SalesService = {
  getSales: async () => {
    const sales = await SalesModel.getSales();
    return sales;
  },

  getSaleById: async (id) => {
  const saleId = await SalesModel.getSaleById(id);
  return saleId;
  },

};

module.exports = SalesService;