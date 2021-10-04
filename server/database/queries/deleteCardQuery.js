const connection = require('../connection');

const deleteCardQuery = (userId, productId) => connection.query(`delete from cart where user_id =${userId} AND product_id = ${productId};`);

module.exports = deleteCardQuery;
