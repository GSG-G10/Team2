const connection = require('../connection');

const getProductslast4Query = (start, end) => {
  const sql = {
    text: 'SELECT * FROM product OFFSET $1 FETCH NEXT $2 ROWS ONLY;',
    values: [start, end],
  };
  return connection.query(sql);
};

module.exports = getProductslast4Query;
