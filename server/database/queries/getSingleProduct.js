const connection = require('../connection');

const getSingleProduct =(product_id)=>connection.query('select * from product where product_id=$1',[product_id])
module.exports=getSingleProduct;