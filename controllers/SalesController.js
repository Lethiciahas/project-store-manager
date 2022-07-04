const SalesService = require('../services/SalesService');

const SalesController = {
  getSales: async (_req, res) => {
  const sales = await SalesService.getSales();
  return res.status(200).json(sales);
  },

  getSalesById: async (req, res) => {
  const { id } = req.params;
  const saleId = await SalesService.getSalesById(id);
  if (!saleId) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(saleId);
},

};

module.exports = SalesController;