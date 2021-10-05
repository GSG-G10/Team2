const connection = require('../connection');

const getCartQuery = (userId) => {
  const sql = {
    text: 'SELECT * FROM cart WHERE user_id = $1;',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getCartQuery;
