const connection = require('../connection');

const clearCardQuery = (userId) => connection.query(`delete from cart where user_id = ${userId};`);

module.exports = clearCardQuery;
