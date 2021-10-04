const connection = require('../connection');

const getSingleProduct =(productId)=>connection.query('select * from product where product_id=$1',[productId])
module.exports=getSingleProduct;