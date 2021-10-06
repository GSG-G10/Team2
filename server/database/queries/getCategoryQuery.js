const connection = require('../connection');

const getCategoryQuery = (id) => connection.query('SELECT * FROM product INNER JOIN category ON product.category_id = ($1)', [id]);

module.exports = getCategoryQuery;
