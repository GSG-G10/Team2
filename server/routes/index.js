const express = require('express');
const addUserHandler = require('./addUser');
const addCardHandler = require('./addCard');
const {getProduct} = require('../controllers/index')
const router = express.Router();

router.post('/singup', addUserHandler);
router.post('/addcard', addCardHandler);
router.get('/api/product/:id',getProduct)
module.exports = router;
