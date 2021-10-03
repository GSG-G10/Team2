const express = require('express');
const addUserHandler = require('./addUser');

const router = express.Router();

router.post('/singup', addUserHandler);

module.exports = router;
