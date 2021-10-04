const bcrypt = require('bcrypt');
const emailExists = require('../database/queries/checkEmailExists');
const { loginValidation } = require('../utiles/validation/logInValidation');
const { createToken } = require('../utiles/createToken');

exports.loginPost = async (req, res) => {
  // validate data before log in
  const { error } = await loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if the email exists
  const user = await emailExists(req.body.email);
  if (user.rowCount === 0) return res.status(400).json({ success: false, msg: 'Invalid Email, you have to sign up first!' });

  // check password
  const dbPassword = user.rows[0].password;
  const validPassword = await bcrypt.compare(req.body.password, dbPassword);
  if (!validPassword) return res.status(400).json({ success: false, msg: 'Incorrect password' });

  // create token and store it in cookies
  const { id, name } = user.rows[0];
  createToken(id, name, process.env.TOKEN_SERCRET, res);
  res.send('you are logged in now!');
};

exports.loginGet = (req, res) => {
  res.json({'login page'})
};
