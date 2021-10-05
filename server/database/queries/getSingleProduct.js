const connection = require('../connection');

const getSingleProduct = (productId) => connection.query('SELECT * from product WHERE product_id=$1', [productId]);
module.exports = getSingleProduct;
