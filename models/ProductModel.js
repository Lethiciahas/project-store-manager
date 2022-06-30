const connection = require('./connection');

const getAllDb = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [rows] = await connection.execute(query);
  return rows;
};

const getAllIdDb = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?';
  const [[productId]] = await connection.execute(query, [id]);
  return productId;
};

module.exports = {
  getAllDb,
  getAllIdDb,
};