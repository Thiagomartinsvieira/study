const express = require('express')
const router = express.Router()

// controller
const { register } = require('../controllers/UserController.jsx')

// middlewares
const validate = require('../middlewares/handleValidation.jsx')
const { userCreateValidation } = require('../middlewares/userValidations.jsx')

// Routes
router.post("/register", userCreateValidation(),validate, register)

module.exports = router;