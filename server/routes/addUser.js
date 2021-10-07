const { addUserQuery } = require('../database/queries');
const { hashPassword } = require('../middlewares/hashPassword');
const { signUpValidation } = require('../utiles/validation');
const { createToken } = require('../utiles/createToken');
const emailExists = require('../database/queries/checkEmailExists');

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
          .then(() => {
            emailExists(email)
              .then((data) => {
                createToken(data.rows.id, name, process.env.TOKEN_SERCRET, res);
                return res.status(201).json({ status: 'User created successfully' });
              });
          })
          .catch((err) => res.json({ status: 'err', error: err }));
      })
      .catch((err) => res.json({ status: 'err', error: err }));
  } else {
    res.json(error);
  }
};
module.exports = addUserHandler;
