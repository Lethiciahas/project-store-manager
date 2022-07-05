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

  addSales: async (data) => {
    const query = 'INSERT INTO StoreManager.sales (date) VALUES (?);';
    const insertData = await connection.execute(query, [data]);
    return insertData;
  },

};

module.exports = SalesModel;