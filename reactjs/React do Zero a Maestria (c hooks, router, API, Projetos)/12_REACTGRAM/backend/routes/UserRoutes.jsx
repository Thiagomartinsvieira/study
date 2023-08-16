const express = require('express')
const router = express.Router()

// controller
const { register, login, getCurrentUser } = require('../controllers/UserController.jsx')

// middlewares
const validate = require('../middlewares/handleValidation.jsx')
const { userCreateValidation, loginValidation } = require('../middlewares/userValidations.jsx')
const authGuard = require('../middlewares/authGuard.jsx')

// Routes
router.post("/register", userCreateValidation(),validate, register)
router.post("/login", loginValidation(),validate, login)
router.get('/profile', authGuard, getCurrentUser)


module.exports = router;