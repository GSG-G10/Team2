const connection = require('../connection');

const clearCartQuery = (userId) => {
  const sql = {
    text: 'DELETE FROM cart WHERE user_id = $1;',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = clearCartQuery;
