
const getProduct = (req,res)=>{
    const {product_id}=req.params;
    getSingleProduct(product_id)
    .then(() => res.json({ status: 'scusses' }))
    .catch((err) => res.json({ status: 'err', error: err }));

}

module.exports=getProduct;