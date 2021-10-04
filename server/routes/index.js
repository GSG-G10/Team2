const express = require('express');
const addUserHandler = require('./addUser');
const addCardHandler = require('./addCard');
const getCategory = require('./getCategory');

const router = express.Router();

router.post('/singup', addUserHandler);
router.post('/addcard', addCardHandler);
router.get('/api/product/category/:categoryId', getCategory);

module.exports = router;
