const express = require('express');
const addUserHandler = require('./addUser');
const addCardHandler = require('./addCard');

const router = express.Router();

router.post('/singup', addUserHandler);
router.post('/addcard', addCardHandler);

module.exports = router;
