const express = require('express');
const getCategory = require('./getCategory');
const addUserHandler = require('./addUser');
const getProductslast4Handler = require('./getLast4Product');
const addCartHandler = require('./addCart');
const getCartHandler = require('./getCart');
const deleteCartHandler = require('./deleteCart');
const clearCartHandler = require('./clearCart');
const loginRouter = require('./login');
const { getProduct } = require('../controllers');
const { privateRoute } = require('../middlewares/privateRoute');

const router = express.Router();

router.use(loginRouter);

router.post('/singup', addUserHandler);
router.post('/getlast4', getProductslast4Handler);
router.post('/addcart/:productId/:quantity', privateRoute, addCartHandler);
router.get('/getcart/', privateRoute, getCartHandler);
router.get('/product/category/:categoryId', getCategory);
router.delete('/clearcart/', privateRoute, clearCartHandler);
router.delete('/deletecart/:productId', privateRoute, deleteCartHandler);
router.get('/api/product/:productId', getProduct);

module.exports = router;
