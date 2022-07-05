const SalesService = require('../services/SalesService');

const SalesController = {
  getSales: async (_req, res) => {
    const sales = await SalesService.getSales();
    return res.status(200).json(sales);
  },
};

module.exports = SalesController;