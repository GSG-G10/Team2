const { getCartQuery } = require('../database/queries');

const getCartHandler = (req, res, next) => {
  const { id: userId } = req.user;

  getCartQuery(parseInt(userId, 10))
    .then(({ rows }) => res.json(({ data: rows })))
    .catch((err) => res.json({ err }))
    .catch((err) => next(err));
};
module.exports = getCartHandler;
