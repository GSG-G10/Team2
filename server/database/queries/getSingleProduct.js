const connection = require('../connection');

const getSingleProduct = (productId) => {
  const sql = {
    text: 'SELECT * FROM product WHERE product_id=$1;',
    values: [productId],
  };
  return connection.query(sql);
};

module.exports = getSingleProduct;
