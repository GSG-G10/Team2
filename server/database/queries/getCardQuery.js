const connection = require('../connection');

const getCardQuery = (userId) => connection.query(`select * FROM cart where user_id = ${userId};`);

module.exports = getCardQuery;
