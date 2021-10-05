const { deleteCardQuery } = require('../database/queries');

const deleteCardHandler = (req, res) => {
  const { userId, productId } = req.params;
  deleteCardQuery(parseInt(userId, 10), parseInt(productId, 10))
    .then(() => res.status(202).json({ status: 'product delete successfully' }))
    .catch((err) => res.json({ err }));
};
module.exports = deleteCardHandler;
