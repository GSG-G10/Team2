const { deleteCartQuery } = require('../database/queries');

const deleteCartHandler = (req, res) => {
  const userId = req.user.id;

  const { productId } = req.params;
  res.json('ok');
  deleteCartQuery(parseInt(userId, 10), parseInt(productId, 10))
    .then(() => res.status(202).json({ status: 'product delete successfully' }))
    .catch((err) => res.json({ err }));
};
module.exports = deleteCartHandler;
