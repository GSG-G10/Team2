const { getCategoryQuery } = require('../database/queries');

const getCategory = (req, res, next) => {
  const { categoryId } = req.params;
  getCategoryQuery(categoryId)
    .then(({ rows }) => res.json({ data: rows }))
    .catch((err) => next(err));
};
module.exports = getCategory;
