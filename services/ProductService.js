const productModel = require('../models/ProductModel');

const getAll = async () => {
  const products = await productModel.getAllDb();
  return products;
};

const getById = async (id) => {
  const productId = await productModel.getAllIdDb(id);
  if (!productId) {
    return null;
  }
  return productId;
};

module.exports = {
  getAll,
  getById,
};