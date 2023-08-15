const express = require('express')
const router = express();

router.use('/api/users', require('./UserRoutes.jsx'));

// test route
router.get('/', (req, res) => {
    res.send('API WORKING!')
})

module.exports = router;