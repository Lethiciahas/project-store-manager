const SalesService = require('../services/SalesService');

const SalesController = {
  getSales: async (_req, res) => {
    const sales = await SalesService.getSales();
    return res.status(200).json(sales);
  },

  getSaleById: async (req, res) => {
  const { id } = req.params;
  const saleId = await SalesService.getSaleById(id);
  if (saleId.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(saleId);
},
};

module.exports = SalesController;