const { getCategoryQuery } = require('../database/queries');
const filterItems = require('../database/queries/filterItemsQuery');

const getCategory = (req, res, next) => {
  const { categoryId } = req.params;
  const { keyword, value } = req.query;

  if (keyword && value) {
    filterItems(keyword, value, categoryId).then(({ rows }) => res.json({ data: rows }))
      .catch((err) => next(err));
  } else {
    getCategoryQuery(categoryId)
      .then(({ rows }) => res.json({ data: rows }))
      .catch((err) => next(err));
  }
};

module.exports = getCategory;
