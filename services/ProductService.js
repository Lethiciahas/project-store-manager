const ProductModels = require('../models/ProductModel');

const ProductServices = {
  getProducts: async () => {
  const products = await ProductModels.getProducts();
  return products;
  },

  getProductsById: async (id) => {
  const productId = await ProductModels.getProductsById(id);
  if (!productId) {
    return null;
  }
  return productId;
  },
  
  addProducts: async (name) => {
    const create = await ProductModels.addProducts(name);
    return create;
  },

};

module.exports = ProductServices;