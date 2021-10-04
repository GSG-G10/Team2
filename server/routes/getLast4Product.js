const { getProductslast4Query } = require('../database/queries');

const getProductslast4Handler = (req, res) => {
  const { start } = req.body;
  const end = parseInt(start, 10) + 4;
  getProductslast4Query(parseInt(start, 10), parseInt(end, 10))
    .then((result) => res.json((result.rows)))
    .catch((err) => res.json({ err }));
};
module.exports = getProductslast4Handler;
