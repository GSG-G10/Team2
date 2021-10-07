const connection = require('../connection');

const getCategoryQuery = (id) => connection.query('SELECT * ,(Select I.imgUrl From Item I WHERE I.product_id= P.id LIMIT 1)  FROM Category C INNER JOIN Product P ON C.id = P.category_id WHERE C.id = $1', [id]);

module.exports = getCategoryQuery;

// (Select I.imgUrl From Item I WHERE I.product_id= P.id LIMIT 1)
