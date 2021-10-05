const { clearCartQuery } = require('../database/queries');

const clearCartHandler = (req, res) => {
  const { id: userId } = req.user;
  clearCartQuery(parseInt(userId, 10))
    .then(() => res.status(202).json({ status: 'cart clear successfully' }))
    .catch((err) => res.json({ err }));
};
module.exports = clearCartHandler;
