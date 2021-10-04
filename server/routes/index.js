const express = require('express');
const addUserHandler = require('./addUser');
const addCardHandler = require('./addCard');
const getCardHandler = require('./getCard');
const deleteCardHandler = require('./deleteCard');
const clearCardHandler = require('./clearCard');
const getProductslast4Handler = require('./getLast4Product');

const router = express.Router();

router.post('/singup', addUserHandler);
router.post('/addcard', addCardHandler);
router.post('/getcard', getCardHandler);
router.post('/clearcard', clearCardHandler);
router.post('/deletecard', deleteCardHandler);
router.post('/getlast4', getProductslast4Handler);

module.exports = router;
