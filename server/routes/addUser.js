const { addUserQuery } = require('../database/queries');
const { hashPassword } = require('../middlewares/hashPassword');

const addUserHandler = (req, res) => {
  const {
    name, email, password, isAdmin, imgUrl,
  } = req.body;
  hashPassword(password)
    .then((hashpass) => {
      addUserQuery(name, email, hashpass, isAdmin, imgUrl)
        .then(() => res.json({ status: 'scusses' }))
        .catch((err) => res.json({ status: 'err', error: err }));
    })
    .catch((err) => res.json({ status: 'err', error: err }));
};
module.exports = addUserHandler;
