const pool = require('../connection');

const addUserQuery = (name, email, password, isAdmin, imgUrl) => pool.query(`INSERT INTO users (name, email, password, isAdmin, imgUrl) VALUES
('${name}', '${email}', '${password}', ${isAdmin}, '${imgUrl}');`);

module.exports = addUserQuery;
