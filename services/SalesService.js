const SalesModel = require('../models/SalesModel');

const SalesService = {
  getSales: async () => {
    const sales = await SalesModel.getSales();
    return sales;
  },

  getSalesById: async (id) => {
    const salesId = await SalesModel.getSalesById(id);
    if (!salesId) {
      return null;
    }
    return salesId;
  },

  addSales: async (newSale) => {
    const { productId, quantity } = newSale;
    const data = await SalesModel.addSales(productId, quantity);
    return data;
  },
  
};

module.exports = SalesService;