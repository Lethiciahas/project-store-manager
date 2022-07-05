const SalesModel = require('../models/SalesModel');

const SalesService = {
  getSales: async () => {
    const sales = await SalesModel.getSales();
    return sales;
  },
};

module.exports = SalesService;