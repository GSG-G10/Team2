const express = require('express');
const addUserHandler = require('./addUser');
const addCardHandler = require('./addCard');
const getCardHandler = require('./getCard');
const deleteCardHandler = require('./deleteCard');
const clearCardHandler = require('./clearCard');

const router = express.Router();

router.post('/singup', addUserHandler);
router.post('/addcard', addCardHandler);
router.post('/getcard', getCardHandler);
router.post('/clearcard', getCardHandler);
router.post('/deletecard', getCardHandler);

module.exports = router;
