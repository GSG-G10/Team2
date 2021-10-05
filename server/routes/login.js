const router = require('express').Router();

const { loginGet, loginPost } = require('../controllers/loginController');
const { logoutRouter } = require('../controllers/logoutController');
const { notLogged } = require('../middlewares/privateRoute');

router.post('/login', loginPost);
router.get('/login', notLogged, loginGet);
router.get('/logout', logoutRouter);

module.exports = router;
