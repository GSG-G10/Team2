const { getCardQuery } = require('../database/queries');

const getCardHandler = (req, res) => {
  const { userId } = req.body;
  getCardQuery(parseInt(userId, 10))
    .then((result) => res.json((result.rows)))
    .catch((err) => res.json({ err }));
};
module.exports = getCardHandler;
