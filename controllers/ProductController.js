const productService = require('../services/ProductService');

const getProducts = async (_req, res) => {
  const products = await productService.getAll();
  return res.status(200).json(products);
};

const getId = async (req, res) => {
  const { id } = req.params;
  const productId = await productService.getById(id);
  if (!productId) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(productId);
};

module.exports = {
  getProducts,
  getId,
};