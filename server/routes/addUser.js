const { addUserQuery } = require('../database/queries');
const { hashPassword } = require('../middlewares/hashPassword');
const { signUpValidation } = require('../utiles/validation');

const addUserHandler = (req, res) => {
  const {
    name, email, password, isAdmin, imgUrl,
  } = req.body;
  const { error } = signUpValidation.validate({
    name, email, password, isdmin: isAdmin, imgUrl,
  });
  if (error === undefined) {
    hashPassword(password)
      .then((hashpass) => {
        addUserQuery(name, email, hashpass, isAdmin, imgUrl)
          .then(() => res.json({ status: 'scusses' }))
          .catch((err) => res.json({ status: 'err', error: err }));
      })
      .catch((err) => res.json({ status: 'err', error: err }));
  } else {
    res.json(error);
  }
};
module.exports = addUserHandler;
