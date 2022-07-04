const connection = require('./connection');

const SalesModel = {
  
  getSales: async () => {
  const query = 'SELECT * FROM StoreManager.sales;';
  const [rows] = await connection.execute(query);
  return rows;
  },

  getSalesById: async (id) => {
    const query = 'SELECT * FROM StoreManager.sales WHERE id=? ORDER BY id';
    const [[productId]] = await connection.execute(query, [id]);
    return productId;
  },

};

module.exports = SalesModel;