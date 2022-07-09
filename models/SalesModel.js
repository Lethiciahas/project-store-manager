const connection = require('./connection');

const SalesModel = {
  
  getSales: async () => {
    const query = `SELECT p.sale_id AS saleId, s.date, p.product_id AS productId, p.quantity 
    FROM StoreManager.sales_products AS p
    INNER JOIN StoreManager.sales AS s
    ON p.sale_id = s.id
    ORDER BY p.sale_id ASC, p.product_id ASC;`;
    const [result] = await connection.execute(query);
    return result;
  },

  getSaleById: async (id) => {
    const query = `SELECT s.date, p.product_id AS productId, p.quantity 
    FROM StoreManager.sales_products AS p
    INNER JOIN StoreManager.sales AS s
    ON p.sale_id = s.id
    WHERE p.sale_id=?
    ORDER BY p.sale_id ASC, p.product_id ASC;`;
    const [result] = await connection.execute(query, [id]);
    if (result.length === '') return null;
    return result;
  },

};

module.exports = SalesModel;