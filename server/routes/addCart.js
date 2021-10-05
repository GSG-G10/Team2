const { addCartQuery } = require('../database/queries');
const { cartValidation } = require('../utiles/validation');

const addCartHandler = (req, res) => {
  const { id: userId } = req.user;
  const { productId, quantity } = req.params;
  const { error } = cartValidation.validate({
    userId, productId, quantity,
  });
  if (error === undefined) {
    addCartQuery(userId, productId, quantity)
      .then(() => res.json({ status: 'product added to cart successfully' }))
      .catch((err) => res.json({ status: 'err', error: err }));
  } else {
    res.json(error);
  }
};
module.exports = addCartHandler;
