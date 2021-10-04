
const getProduct = (req,res)=>{
    const {productId}=req.params;
    getSingleProduct(productId)
    .then((data) => res.json(data.rows))
    .catch((err) => res.json({ status: 'err', error: err }));

}

module.exports=getProduct;