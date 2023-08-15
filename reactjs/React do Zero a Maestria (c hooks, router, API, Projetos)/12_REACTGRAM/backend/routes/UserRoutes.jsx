const express = require('express')
const router = express.Router()

// controller
const { register } = require('../controllers/UserController.jsx')

// middlewares
const validate = require('../middlewares/handleValidation.jsx')

// Routes
router.post("/register",validate, register)

module.exports = router;