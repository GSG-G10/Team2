const getSingleProduct = require('../database/queries/getSingleProduct');

const getProduct = (req, res) => {
  const { productId } = req.params;
  getSingleProduct(productId)
    .then(({ rows }) => res.json({ data: rows[0] }))
    .catch((err) => res.json({ status: 'err', error: err }));
};

module.exports = getProduct;
