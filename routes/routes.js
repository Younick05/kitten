const express = require('express')
const router = express.Router();
const authentication = require('../middleware/auth')

// import controllers
const userDetails = require('../controler/user')

// use controllers with routes
router.post('/user', authentication, userDetails)

module.exports = router;