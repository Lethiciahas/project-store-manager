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
  
  addProducts: async (newProduct) => {
    const { name } = newProduct;
     const id = await ProductModels.addProducts(name);
    return id;
  },

  updateProducts: async (name, id) => {
    const data = await ProductModels.updateProducts(id, name);
    if (!data) return false;
    return data;
  },

};

module.exports = ProductServices;