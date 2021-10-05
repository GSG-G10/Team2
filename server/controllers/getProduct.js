const getProduct = (req, res) => {
  const { productId } = req.params;
  getSingleProduct(productId)
    .then(({ rows }) => res.json(rows[0]))
    .catch((err) => res.json({ status: 'err', error: err }));
};

module.exports = getProduct;
