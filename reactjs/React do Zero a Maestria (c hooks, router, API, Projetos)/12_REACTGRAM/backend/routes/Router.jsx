const express = require('express')
const router = express();

router.use('/api/users', require('./UserRoutes.jsx'));
router.use('/api/photos', require('./photoRoutes.jsx'))

// test route
router.get('/', (req, res) => {
    res.send('API WORKING!')
})

module.exports = router;