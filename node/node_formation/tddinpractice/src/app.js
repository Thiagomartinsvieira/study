const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ success: true });
});

app.get('/color/:person', (req, res) => {
    const person = req.params.person;
    if (person === 'Thiago') {
        res.json({ cor: 'red', color: 'blue' });
    } else {
        res.status(404).json({ error: 'Person not found' });
    }
});

module.exports = app;
