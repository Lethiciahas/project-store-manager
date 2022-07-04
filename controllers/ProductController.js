const ProductService = require('../services/ProductService');

const ProductController = {
  getProducts: async (_req, res) => {
  const products = await ProductService.getProducts();
  return res.status(200).json(products);
  },

  getProductsById: async (req, res) => {
  const { id } = req.params;
  const productId = await ProductService.getProductsById(id);
  if (!productId) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(productId);
},

  addProducts: async (req, res) => {
    const { name } = req.body;
    const id = await ProductService.addProducts({ name });
    const object = {
      id: Number(id),
      name,
    };

    return res.status(201).json(object);
},

};

module.exports = ProductController;