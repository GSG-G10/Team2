const connection = require('../connection');

const getCartQuery = (userId) => connection.query(`select * FROM cart where user_id = ${userId};`);

module.exports = getCartQuery;
