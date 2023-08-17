const User = require('../models/User.jsx')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET

const authGuard = async (req, res, next) => {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    // check if header has a token
    if (!token) return res.status(401).json({ erros: ['Acesso negado!'] })

    // check if token is valid
    try {

        const verified = jwt.verify(token, jwtSecret)

        req.user = await User.findById(verified.id).select('-password')
        next()

    } catch (error) {
        res.status(401).json({ errors: ['Token invalido!'] })
    }
}

module.exports = authGuard