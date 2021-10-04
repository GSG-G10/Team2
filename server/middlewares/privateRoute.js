const jwt = require('jsonwebtoken');

exports.privateRoute = (req, res, next) => {
  const { authToken } = req.cookies;
  if (!authToken) {
    return res.status(401).json({ success: false, message: 'you have to log in first' });
  }
  try {
    const verified = jwt.verify(authToken, process.env.TOKEN_SERCRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ success: false, msg: 'Invalid token!' });
  }
};

exports.notLogged = (req, res, next) => {
  const { authToken } = req.cookies;
  if (authToken) return res.json({ message: 'already logged in!' });
  next();
};
