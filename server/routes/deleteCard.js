const { deleteCardQuery } = require('../database/queries');

const deleteCardHandler = (req, res) => {
  const userId = req.user.id;

  const { productId } = req.params;
  res.json('ok');
  deleteCardQuery(parseInt(userId, 10), parseInt(productId, 10))
    .then(() => res.status(202).json({ status: 'product delete successfully' }))
    .catch((err) => res.json({ err }));
};
module.exports = deleteCardHandler;
