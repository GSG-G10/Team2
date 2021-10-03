const { addCardQuery } = require('../database/queries');
const { cardValidation } = require('../utiles/validation');

const addCardHandler = (req, res) => {
  const {
    userId, productId, quantity,
  } = req.body;
  const { error } = cardValidation.validate({
    userId, productId, quantity,
  });
  if (error === undefined) {
    addCardQuery(userId, productId, quantity)
      .then(() => res.json({ status: 'scusses' }))
      .catch((err) => res.json({ status: 'err', error: err }));
  } else {
    res.json(error);
  }
};
module.exports = addCardHandler;
