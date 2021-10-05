const express = require('express');
const addUserHandler = require('./addUser');
const addCardHandler = require('./addCard');
const getCategory = require('./getCategory');
const { getProduct } = require('../controllers/index');

const router = express.Router();

router.post('/singup', addUserHandler);
router.post('/addcard', addCardHandler);
router.get('/product/category/:categoryId', getCategory);
router.get('/api/product/:productId', getProduct);
module.exports = router;
