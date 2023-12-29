const express = require('express'); 
const app = express();

// i speaking for the express using the ejs with view engine
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/',(req, res) => {
    res.render("index");
});

app.get('/to_ask', (req, res) => {
    res.render('to_ask');
})

app.post('/savequestion', (req, res) => {
    res.send('Form received!');
});

app.listen(8080, () => {
    console.log('app running!');
});