const { getCategoryQuery } = require('../database/queries');

const getCategory = (req, res) => {
  const { categoryId } = req.params;
  getCategoryQuery(categoryId)
    .then((data) => res.json(data.rows))
    .catch((err) => res.json({ error: err }));
};
module.exports = getCategory;
