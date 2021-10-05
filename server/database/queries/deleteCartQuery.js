const connection = require('../connection');

const deleteCartQuery = (userId, productId) => {
  const sql = {
    text: 'delete from cart where user_id =$1 AND product_id = $2;',
    values: [userId, productId],
  };
  return connection.query(sql);
};

module.exports = deleteCartQuery;
