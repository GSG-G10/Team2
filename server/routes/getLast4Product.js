const { getProductslast4Query } = require('../database/queries');

const getProductslast4Handler = (req, res, next) => {
  const { start } = req.params;
  const end = parseInt(start, 10) + 4;
  getProductslast4Query(parseInt(start, 10), parseInt(end, 10))
    .then(({ rows }) => res.json(({ data: rows })))
    .catch((err) => next(err));
};
module.exports = getProductslast4Handler;
