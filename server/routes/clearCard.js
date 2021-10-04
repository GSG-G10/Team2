const { clearCardQuery } = require('../database/queries');

const clearCardHandler = (req, res) => {
  const { userId } = req.body;
  clearCardQuery(parseInt(userId, 10))
    .then(() => res.json({ status: 'success' }))
    .catch((err) => res.json({ err }));
};
module.exports = clearCardHandler;
