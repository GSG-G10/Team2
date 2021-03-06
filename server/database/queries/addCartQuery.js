const connection = require('../connection');

const addCartQuery = (userId, productId, quantity) => connection.query('INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3);', [userId, productId, quantity]);

module.exports = addCartQuery;
