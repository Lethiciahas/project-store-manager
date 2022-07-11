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
    const query = 'INSERT INTO StoreManager.products (name) VALUES (?);';
    const [{ insertId }] = await connection.execute(query, [name]);
    return insertId;
  },
  
  updateProducts: async ({ id, name }) => {
    const query = 'UPDATE StoreManager.products SET name=? WHERE id=?';
    const [result] = await connection.execute(query, [name, id]);
    return result;
  },

  deleteProducts: async (id) => {
    const query = 'DELETE FROM StoreManager.products WHERE id=?;';
    const [{ result }] = await connection.execute(query, [id]);
    return result;
  },
};

module.exports = ProductModels;