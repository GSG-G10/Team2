const express = require('express');
const addUserHandler = require('./addUser');
const addCardHandler = require('./addCard');
const getCardHandler = require('./getCard');

const router = express.Router();

router.post('/singup', addUserHandler);
router.post('/addcard', addCardHandler);
router.post('/getcard', getCardHandler);

module.exports = router;
