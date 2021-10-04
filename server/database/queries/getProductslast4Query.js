const connection = require('../connection');

const getProductslast4Query = (start, end) => connection.query(`SELECT * FROM product OFFSET ${start} FETCH NEXT ${end} ROWS ONLY;`);

module.exports = getProductslast4Query;
