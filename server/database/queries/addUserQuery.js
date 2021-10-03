const connection = require('../connection');

const addUserQuery = (name, email, password, isAdmin, imgUrl) => connection.query('INSERT INTO users (name, email, password, isAdmin, imgUrl) VALUES ($1, $2, $3, $4, $5);', [name, email, password, isAdmin, imgUrl]);

module.exports = addUserQuery;
