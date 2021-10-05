const { clearCardQuery } = require('../database/queries');

const clearCardHandler = (req, res) => {
  const userId = req.user.id;
  clearCardQuery(parseInt(userId, 10))
    .then(() => res.status(202).json({ status: 'cart clear successfully' }))
    .catch((err) => res.json({ err }));
};
module.exports = clearCardHandler;
