const connection = require('../connection');

const deleteCartQuery = (userId, productId) => connection.query(`delete from cart where user_id =${userId} AND product_id = ${productId};`);

module.exports = deleteCartQuery;
