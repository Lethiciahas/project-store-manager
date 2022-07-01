const connection = require('./connection');

const ProductModels = {
  
  getProducts: async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [rows] = await connection.execute(query);
  return rows;
  },

  getProductsById: async (id) => {
    const query = 'SELECT * FROM StoreManager.products WHERE id=?';
    const [[productId]] = await connection.execute(query, [id]);
    return productId;
  },

  addProducts: async (name) => {
    const query = 'INSERT INTO StoreManager.products (name) VALUE (?);';
    const [data] = await connection.execute(query, [name]);
    const newProduct = {
      id: data.insertId,
      name,
    };
    return newProduct;
  },
  
};

module.exports = ProductModels;