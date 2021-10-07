const connection = require('../connection');

const getSingleProduct = (productId) => {
  const sql = {
    text: 'SELECT * FROM product P INNER JOIN item I ON P. id = I.product_id AND P.id = $1',
    values: [productId],
  };
  return connection.query(sql);
};

module.exports = getSingleProduct;
