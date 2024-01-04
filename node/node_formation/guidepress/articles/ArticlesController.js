const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
    res.send('Articles Route')
});

router.get('/admin/articles/new', (req, res) => {
    res.send('Route to create new article!');
});

module.exports = router;