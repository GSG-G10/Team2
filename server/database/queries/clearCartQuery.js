const connection = require('../connection');

const clearCartQuery = (userId) => connection.query(`delete from cart where user_id = ${userId};`);

module.exports = clearCartQuery;
