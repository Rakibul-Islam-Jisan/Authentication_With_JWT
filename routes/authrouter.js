const express = require('express')
const register = require('../controllers/registerController')
const login = require('../controllers/loginController')
const loginLimiter = require('../middlewares/rateLimiter')
const router = express.Router()

router.post('/register',register)
router.post('/login',loginLimiter,login)

module.exports = router