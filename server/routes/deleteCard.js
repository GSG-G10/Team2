const { deleteCardQuery } = require('../database/queries');

const deleteCardHandler = (req, res) => {
  const { userId, productId } = req.body;
  deleteCardQuery(parseInt(userId, 10), parseInt(productId, 10))
    .then(() => res.json({ status: 'success' }))
    .catch((err) => res.json({ err }));
};
module.exports = deleteCardHandler;
