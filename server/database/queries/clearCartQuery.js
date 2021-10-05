const connection = require('../connection');

const clearCartQuery = (userId) => {
  const sql = {
    text: 'delete from cart where user_id = $1;',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = clearCartQuery;
