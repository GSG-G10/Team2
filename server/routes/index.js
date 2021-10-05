const express = require('express');
const addUserHandler = require('./addUser');
const addCardHandler = require('./addCard');
const getCardHandler = require('./getCard');
const deleteCardHandler = require('./deleteCard');
const clearCardHandler = require('./clearCard');
const loginRouter = require('./login');
const { getProduct } = require('../controllers');
const { privateRoute } = require('../middlewares/privateRoute');

const router = express.Router();
router.use(loginRouter);
router.post('/singup', addUserHandler);
router.post('/addcard/:productId/:quantity', privateRoute, addCardHandler);
router.get('/getcard/', privateRoute, getCardHandler);
router.delete('/clearcard/', privateRoute, clearCardHandler);
router.delete('/deletecard/:productId', privateRoute, deleteCardHandler);

router.get('/api/product/:productId', getProduct);
module.exports = router;
