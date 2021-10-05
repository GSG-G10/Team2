const { getCardQuery } = require('../database/queries');

const getCardHandler = (req, res, next) => {
  const userId = req.user.id;
  getCardQuery(parseInt(userId, 10))
    .then(({ rows }) => res.json(({ data: rows })))
    .catch((err) => res.json({ err }))
    .catch((err) => next(err));
};
module.exports = getCardHandler;
