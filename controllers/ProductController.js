const ProductServices = require('../services/ProductService');
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
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ message: '"name" is required' });
      }
      if (name.length < 5) {
        res.status(422).json({ message: '"name" length must be at least 5 characters long' });
      }
      const id = await ProductService.addProducts({ name });
      const object = {
        id: Number(id),
        name,
      };
      return res.status(201).json(object);
    } catch (err) {
      return res.status(500).end();
    }
  },

  updateProducts: async (req, res) => {
      const { id } = req.params;
      const { name } = req.body;
      if (!name) return res.status(400).json({ message: '"name" is required' });
      if (name.length < 5) {
        return res.status(422)
          .json({ message: '"name" length must be at least 5 characters long' });
      }
    const data = await ProductServices.getProductsById(id);
    if (!data) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await ProductServices.updateProducts({ id, name });
    return res.status(200).json({ id, name });
  },
  
  deleteProducts: async (req, res) => {
    const { id } = req.params;
    const getProducts = await ProductService.getProductsById(id);
    if (!getProducts) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await ProductServices.deleteProducts(id);
      return res.status(204).end();
 },

};

module.exports = ProductController;